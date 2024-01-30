import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default async function home(fastify: FastifyInstance) {
  fastify.route({
    method: "GET",
    url: "/",
    handler: onHomeRequest,
  });

  async function onHomeRequest(
    req: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    try {
      return reply.view("index.hbs", {
        layout: true,
        databases: fastify.envConfig.DATABASES.map((database) => database.name),
        promptMaxlength: fastify.envConfig.PROMPT_MAX_LENGTH,
      });
    } catch (error) {
      fastify.log.error(`/home/ Error: ${error}`);
      reply.status(500).send({
        error: "Server error",
        message: "Server failed processing the request.",
      });
    }
  }
}
