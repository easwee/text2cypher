# text2cypher

Crowdsourced cypher statement evaluation.

## .env vars

Check .env.example for overview on how to setup .env vars.

| Parameter                | Description                                                                                                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `HOST`                   | Server host. Default: `127.0.0.1`                                                                                                                                                           |
| `PORT`                   | Server port for app to run on. Default: `9001`                                                                                                                                              |
| `OPENAI_API_KEY`         | Your [OpenAI API key](https://platform.openai.com/api-keys)                                                                                                                                 |
| `PROMPT_MAX_LENGTH`      | Maximum allowed prompt length. Default: `300`                                                                                                                                               |
| `PROMPT_MAX_DURATION_MS` | Maximum duration of prompt request. Default: `5000`                                                                                                                                         |
| `DATABASES`              | String containing an array of your database connection objects. Example: `'[{"uri":"neo4j+s://demo.neo4jlabs.com","name":"test_db","username":"test","password":"test"}]'`                  |
| `FEEDBACK_DATABASE`      | String containing your feedback database connection object. Example: `'{"uri": "neo4j+s://1234asdf.databases.neo4j.io", "name":"feedback_db","username":"feedback","password":"feedback"}'` |

## Build and run with NodeJS

Setup env:

`cp .env.template .env` and add missing keys.

Install dependencies:

`npm install`

Build:

`npm run build`

Run:

`cd dist && npm start`

## Run with Docker

Setup env:

`cp .env.template .env` and add missing keys.

Docker compose will read env variables from your .env file.

`docker-compose up --build`

Docker container will spin up on 127.0.0.1:3001

## Development

Setup env:

`cp .env.template .env`

and add missing keys. Check `.env.example` for setup. Multiple input `DATABASES` are supported.

Install dependencies:

`npm install`

Run local development server:

`npm run dev`

This project is built with [Fastify](https://www.fastify.io/docs/latest/) and [HTMX](https://htmx.org/).
