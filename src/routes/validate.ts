import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import S from "fluent-json-schema";
import { neo4jFeedbackDriver } from "../service/neo4j";

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
      response: {
        200: S.object().prop("message", S.string()).valueOf(),
        400: S.object()
          .prop("error", S.string().required())
          .prop("message", S.string().required())
          .valueOf(),
        500: S.object()
          .prop("error", S.string())
          .prop("message", S.string().required())
          .valueOf(),
      },
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

    const session = neo4jFeedbackDriver.session();

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

      reply
        .header("Content-Type", "application/json; charset=utf-8")
        .status(200)
        .send({ message: "OK" });
    } catch (error) {
      fastify.log.error(`/validate/ Error: ${error}`);
      reply.status(500).send({
        error: "Server error",
        message: "Server failed processing the request.",
      });
    } finally {
      session.close();
    }
  }
}
