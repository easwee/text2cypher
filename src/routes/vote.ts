import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { neo4jFeedbackDriver } from "../service/neo4j";

interface VoteRequestBody {
  messageId: string;
  validatedCypher?: string;
}

export default async function voteUp(fastify: FastifyInstance) {
  fastify.route({
    method: "POST",
    url: "/vote/up/",
    handler: onVoteUp,
  });

  async function onVoteUp(
    req: FastifyRequest<{ Body: VoteRequestBody }>,
    reply: FastifyReply
  ): Promise<any> {
    const { messageId } = req.body;

    if (!messageId) {
      return reply.code(400).send({
        error: "Bad Request",
        message: "Payload error: 'messageId' cannot be an empty string",
      });
    }

    const session = neo4jFeedbackDriver.session();

    try {
      // store vote
      await session.run(
        `
        MATCH (m:Message {id:$id})
        SET m.vote = $vote,
            m.updated_at = datetime()
      `,
        {
          id: messageId,
          vote: 1,
        }
      );

      return reply.view("partials/vote-up-success.hbs");
    } catch (error) {
      fastify.log.error(`/vote/up/ Error: ${error}`);
      reply.status(500).send({
        error: "Server error",
        message: "Server failed processing the request.",
      });
    } finally {
      session.close();
    }
  }

  async function onVoteDown(
    req: FastifyRequest<{ Body: VoteRequestBody }>,
    reply: FastifyReply
  ): Promise<any> {
    const { messageId } = req.body;

    if (!messageId) {
      return reply.code(400).send({
        error: "Bad Request",
        message: "Payload error: 'messageId' cannot be an empty string",
      });
    }

    const session = neo4jFeedbackDriver.session();

    try {
      // store vote
      await session.run(
        `
        MATCH (m:Message {id:$id})
        SET m.vote = $vote,
            m.updated_at = datetime()
      `,
        {
          id: messageId,
          vote: -1,
        }
      );

      return reply.view("Thank you for your vote.");
    } catch (error) {
      fastify.log.error(`/vote/up/ Error: ${error}`);
      reply.status(500).send({
        error: "Server error",
        message: "Server failed processing the request.",
      });
    } finally {
      session.close();
    }
  }
}
