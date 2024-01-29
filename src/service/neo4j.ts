import neo4j from "neo4j-driver";

interface DbConnectionData {
  uri: string;
  name: string;
  username: string;
  password: string;
}

export const DATABASES: DbConnectionData[] = JSON.parse(process.env.DATABASES);

export const neo4jFeedbackDriver = neo4j.driver(
  process.env.FEEDBACK_DATABASE_URI,
  neo4j.auth.basic(
    process.env.FEEDBACK_DATABASE_USERNAME,
    process.env.FEEDBACK_DATABASE_PASSWORD
  )
);
