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
import { initConfig, EnvConfig } from "./config";
import { initFeedbackDatabase } from "./services/database";
import { Driver } from "neo4j-driver";

declare module "fastify" {
  interface FastifyInstance {
    envConfig: EnvConfig;
    neo4jDriver: Driver;
  }
}

interface CustomOptions {}

async function initServer() {
  const server = fastify({
    logger: true,
  });

  await server.register(Env, {
    dotenv: true,
    data: process.env,
    schema: S.object()
      .prop("OPENAI_API_KEY", S.string())
      .prop("DATABASES", S.string())
      .prop("FEEDBACK_DATABASE", S.string())
      .prop("PROMPT_MAX_LENGTH", S.string())
      .prop("PROMPT_MAX_DURATION_MS", S.string())      
      .prop("PORT", S.string())
      .prop("HOST", S.string())
      .valueOf(),
  });

  server.decorate("envConfig", initConfig(process.env));
  if(server.envConfig.FEEDBACK_DATABASE) {
    server.decorate("neo4jDriver", initFeedbackDatabase(server.envConfig));
  }

  return server;
}

async function startServer(fastify: FastifyInstance, opts: CustomOptions) {
  try {
    // add static files for FE
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

    await fastify.listen({
      host: fastify.envConfig.HOST,
      port: fastify.envConfig.PORT,
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

(async function () {
  const server = await initServer();
  startServer(server, {});
})();
