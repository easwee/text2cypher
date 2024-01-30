import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import S from "fluent-json-schema";

export default async function status(fastify: FastifyInstance) {
  fastify.route({
    method: "GET",
    url: "/status/",
    handler: onStatus,
    schema: {
      response: {
        200: S.object().prop("message", S.string()).valueOf(),
        500: S.object()
          .prop("error", S.string())
          .prop("message", S.string().required())
          .valueOf(),
      },
    },
  });

  async function onStatus(
    req: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    try {
      return reply.view("partials/notification.hbs", {
        layout: false,
        type: "success",
        text: "Server operational.",
      });
    } catch (error) {
      fastify.log.error(`/ask/ Error: ${error}`);
      reply.status(500).send({
        error: "Server error",
        message: "Server failed processing the request.",
      });
    }
  }
}
