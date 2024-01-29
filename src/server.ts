import fastify, { FastifyInstance } from "fastify";
import Env from "@fastify/env";
import FastifyView from "@fastify/view";
import FastifyStatic from "@fastify/static";
import FastifyFormBody from "@fastify/formbody";
import AutoLoad from "@fastify/autoload";
import Sensible from "@fastify/sensible";
import S from "fluent-json-schema";
import { join } from "path";
import { loadPartials } from "./utils/partials";

interface CustomOptions {}

const server = fastify({
  logger: true,
});

async function startServer(fastify: FastifyInstance, opts: CustomOptions) {
  try {
    // bring in ENV vars
    await fastify.register(Env, {
      dotenv: true,
      data: process.env,
      schema: S.object()
        .prop("PORT", S.number().required())
        .prop("OPENAI_API_KEY", S.string().required())
        .prop("FEEDBACK_DATABASE_URI", S.string().required())
        .prop("FEEDBACK_DATABASE_USERNAME", S.string().required())
        .prop("FEEDBACK_DATABASE_PASSWORD", S.string().required())
        .valueOf(),
    });

    await fastify.register(FastifyStatic, {
      root: join(__dirname, "public"),
      prefix: "/public",
    });

    // utility
    await fastify.register(Sensible);

    // required for htmx requests
    await fastify.register(FastifyFormBody);

    // enable templating engine
    await fastify.register(FastifyView, {
      engine: {
        handlebars: require("handlebars"),
      },
      root: join(__dirname, "views"),
      includeViewExtension: true,
      layout: "./layouts/main",
      options: {
        partials: loadPartials(join(__dirname, "views/partials")),
      },
    });

    // autoload routes
    await fastify.register(AutoLoad, {
      dir: join(__dirname, "routes"),
      options: Object.assign({}, opts),
    });

    await fastify.listen({ port: parseInt(process.env.PORT) });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

startServer(server, {});
