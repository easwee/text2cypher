import S from "fluent-json-schema";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

interface VoteDownRequestBody {
  messageId: string;
}

export default async function voteDown(fastify: FastifyInstance) {
  fastify.route({
    method: "POST",
    url: "/vote/down/",
    handler: onVoteDown,
    schema: {
      body: S.object()
        .prop("messageId", S.string().required())
        .valueOf(),
    },
  });

  async function onVoteDown(
    req: FastifyRequest<{ Body: VoteDownRequestBody }>,
    reply: FastifyReply
  ): Promise<any> {
    const { messageId } = req.body;

    if (!messageId) {
      return reply.code(400).send({
        error: "Bad Request",
        message: "Payload error: 'messageId' cannot be an empty string",
      });
    }

    const session = fastify.neo4jDriver.session();

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

      return reply.view("partials/vote-success.hbs");
    } catch (error) {
      fastify.log.error(`/vote/down/ Error: ${error}`);
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
