export interface DbConnectionData {
  uri: string;
  username: string;
  password: string;
  name?: string;
}

export interface EnvConfig {
  HOST: string;
  PORT: number;
  OPENAI_API_KEY: string;
  PROMPT_MAX_LENGTH: number;
  PROMPT_MAX_DURATION_MS: number;
  DATABASES: Array<DbConnectionData>;
  FEEDBACK_DATABASE: DbConnectionData | null;
}

export function initConfig(env: any): EnvConfig {
  return {
    HOST: env.HOST ? env.HOST : "127.0.0.1",
    PORT: env.PORT ? parseInt(env.PORT) : 9001,
    OPENAI_API_KEY: env.OPENAI_API_KEY || "",
    PROMPT_MAX_LENGTH: env.PROMPT_MAX_LENGTH
      ? parseInt(env.PROMPT_MAX_LENGTH)
      : 300,
    PROMPT_MAX_DURATION_MS: env.PROMPT_MAX_DURATION_MS
      ? parseInt(env.PROMPT_MAX_DURATION_MS)
      : 5000,
    DATABASES: env.DATABASES ? JSON.parse(env.DATABASES) : [],
    FEEDBACK_DATABASE: env.FEEDBACK_DATABASE
      ? JSON.parse(env.FEEDBACK_DATABASE)
      : null,
  };
}
