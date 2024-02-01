import S from "fluent-json-schema";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

interface ValidateRequestBody {
  messageId: string;
  validatedCypher?: string;
}

export default async function validate(fastify: FastifyInstance) {
  fastify.route({
    method: "POST",
    url: "/validate/",
    handler: onValidate,
    schema: {
      body: S.object()
        .prop("messageId", S.string().required())
        .prop("validatedCypher", S.string())
        .valueOf(),
    },
  });

  async function onValidate(
    req: FastifyRequest<{ Body: ValidateRequestBody }>,
    reply: FastifyReply
  ): Promise<any> {
    const { messageId, validatedCypher } = req.body;

    if (!messageId.trim()) {
      return reply.code(400).send({
        error: "Bad Request",
        message: "Payload error: 'messageId' cannot be an empty string",
      });
    }

    if (!validatedCypher.trim()) {
      return reply.code(400).send({
        error: "Bad Request",
        message: "Payload error: 'validatedCypher' cannot be an empty string",
      });
    }

    const session = fastify.neo4jDriver.session();

    try {
      // store feedback cypher
      await session.run(
        `
          MATCH (m:Message {id:$id})
          SET m.validated_cypher = $validated_cypher,
              m.updated_at = datetime()
        `,
        {
          id: messageId,
          validated_cypher: validatedCypher,
        }
      );

      return reply.view("partials/vote-validate-success.hbs");
    } catch (error) {
      fastify.log.error(`/validate/ Error: ${error}`);
      reply.status(500).send({
        error: "Server error",
        message: "Server failed processing the request.",
      });
    } finally {
      if (session) {
        session.close();
      }
    }
  }
}
