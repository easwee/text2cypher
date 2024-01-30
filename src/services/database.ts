import neo4j from "neo4j-driver";
import { EnvConfig } from "../config";

export function initFeedbackDatabase(env: EnvConfig) {
  const feedbackDatabase = env.FEEDBACK_DATABASE;

  return neo4j.driver(
    feedbackDatabase.uri,
    neo4j.auth.basic(feedbackDatabase.username, feedbackDatabase.password)
  );
}
