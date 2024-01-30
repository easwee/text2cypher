import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { DATABASES } from "../service/neo4j";

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
        databases: DATABASES.map((database) => database.name),
        promptMaxlength: process.env.PROMPT_MAX_LENGTH,
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
