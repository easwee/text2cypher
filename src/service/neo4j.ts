import neo4j from "neo4j-driver";

interface DbConnectionData {
  uri: string;
  name: string;
  username: string;
  password: string;
}

export const DATABASES: DbConnectionData[] = JSON.parse(process.env.DATABASES);

export const neo4jFeedbackDriver = neo4j.driver(
  process.env.NEO4J_DB_FEEDBACK_URI,
  neo4j.auth.basic(
    process.env.NEO4J_DB_FEEDBACK_USERNAME,
    process.env.NEO4J_DB_FEEDBACK_PASSWORD
  )
);
