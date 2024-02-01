import S from "fluent-json-schema";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { Neo4jGraph } from "@langchain/community/graphs/neo4j_graph";

interface StatusRequestBody {
  database: string;
}

export default async function schema(fastify: FastifyInstance) {
  fastify.route({
    method: "POST",
    url: "/schema/",
    handler: onStatus,
    schema: {
      body: S.object()
        .prop("database", S.string().required())
        .valueOf(),
    },
  });

  async function onStatus(
    req: FastifyRequest<{ Body: StatusRequestBody }>,
    reply: FastifyReply
  ): Promise<any> {
    let graph: Neo4jGraph;

    try {
      const { database } = req.body;

      if (!database) {
        throw new Error("Payload error: Missing /schema/ parameter 'database'");
      }

      const dbConnectionData = fastify.envConfig.DATABASES.find(
        (db) => db.name == database
      );

      graph = await Neo4jGraph.initialize({
        url: dbConnectionData.uri,
        username: dbConnectionData.username,
        password: dbConnectionData.password,
        database: dbConnectionData.username,
      });

      const schema = graph.getSchema();

      return reply.view("partials/schema.hbs", {
        schema,
      });
    } catch (error) {
      fastify.log.error(`/schema/ Error: ${error}`);
      reply.status(500).send({
        error: "Server error",
        message: "Server failed processing the request.",
      });
    } finally {
      if (graph) {
        graph.close();
      }
    }
  }
}
