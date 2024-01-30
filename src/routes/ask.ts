import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import S from "fluent-json-schema";
import { Neo4jGraph } from "@langchain/community/graphs/neo4j_graph";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
// this import should be replaced with langchain import when chypher validation is implemented there
import { GraphCypherQAChain } from "../custom/graph-cypher-qa-chain/chain";

interface AskRequestBody {
  database: string;
  prompt: string;
  email?: string;
}

export default async function ask(fastify: FastifyInstance) {
  fastify.route({
    method: "POST",
    url: "/ask/",
    handler: onAsk,
    schema: {
      body: S.object()
        .prop("database", S.string().required())
        .prop("prompt", S.string().required())
        .prop("email", S.string())
        .valueOf(),
    },
  });

  async function onAsk(
    req: FastifyRequest<{ Body: AskRequestBody }>,
    reply: FastifyReply
  ): Promise<void> {
    const { database, prompt, email = "" } = req.body;
    const promptMaxLength = fastify.envConfig.PROMPT_MAX_LENGTH;

    fastify.log.info(
      `EMAIL: ${email} / DATABASE: ${database} / PROMPT: ${prompt}`
    );

    if (!prompt.trim()) {
      return reply.code(400).send({
        error: "Bad Request",
        message: "Payload error: 'prompt' cannot be an empty string",
      });
    }

    if (prompt.length > promptMaxLength) {
      return reply.code(400).send({
        error: "Bad Request",
        message: `Payload error: Max 'prompt' length is ${promptMaxLength} characters.`,
      });
    }

    if (!database.trim()) {
      return reply.code(400).send({
        error: "Bad Request",
        message: "Payload error: 'database' not specified.",
      });
    }

    let graph: Neo4jGraph;
    const session = fastify.neo4jDriver.session();

    try {
      // ask LLM
      const chatOpenAI = new ChatOpenAI({
        openAIApiKey: fastify.envConfig.OPENAI_API_KEY,
        modelName: "gpt-4-1106-preview",
        temperature: 0,
      });

      const dbConnectionData = fastify.envConfig.DATABASES.find(
        (db) => db.name == database
      );

      graph = await Neo4jGraph.initialize({
        url: dbConnectionData.uri,
        username: dbConnectionData.username,
        password: dbConnectionData.password,
        database: dbConnectionData.username,
        timeoutMs: fastify.envConfig.PROMPT_MAX_DURATION_MS,
      });

      const chain = GraphCypherQAChain.fromLLM({
        llm: chatOpenAI,
        graph,
        returnDirect: true,
        returnIntermediateSteps: true,
      });

      // get data from result
      const response = await chain.call({ query: prompt });
      const answer = response.result
        ? JSON.stringify(response.result, null, 2)
        : "No results. Syntax error or db request timed out.";

      // construct the cypher from intermediate steps
      let cypher = "";
      if (response.intermediateSteps) {
        response.intermediateSteps.forEach((step: any) => {
          if (step.query) {
            cypher = step.query;
          }
        });
      }

      // store message data to feedback db
      let messageId = "";

      if (answer) {
        const trimmedEmail = email.trim();
        const embeddings = new OpenAIEmbeddings();
        const question_embedding = await embeddings.embedQuery(prompt);

        const storedMessageResult = await session.run(
          `
            CREATE (m:Message)
            SET m.question = $question,
                m.question_embedding = $question_embedding,
                m.cypher = $cypher,
                m.answer = $answer,
                m.database = $database,
                m.id = randomUUID(),
                m.created_at = datetime(),
                m.email = $email
            RETURN m.id AS id
          `,
          {
            database: database,
            question: prompt,
            question_embedding: question_embedding,
            cypher: cypher,
            answer: answer,
            email: trimmedEmail !== "" ? trimmedEmail : null,
          }
        );
        messageId = storedMessageResult.records[0].get("id");
      }

      return reply.view("partials/prompt-output.hbs", {
        messageId,
        cypher,
        answer,
        promptMaxLength,
      });
    } catch (error: any) {
      fastify.log.error(`/ask/ Error: ${error}`);
      reply.status(500).send({
        error: "Server error",
        message: "Server failed processing the request.",
      });
    } finally {
      session.close();
      graph.close();
    }
  }
}
