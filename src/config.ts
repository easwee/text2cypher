export interface DbConnectionData {
  uri: string;
  username: string;
  password: string;
  name?: string;
}

export interface EnvConfig {
  PORT: number;
  OPENAI_API_KEY: string;
  PROMPT_MAX_LENGTH: number;
  PROMPT_MAX_DURATION_MS: number;
  DATABASES: Array<DbConnectionData>;
  FEEDBACK_DATABASE: DbConnectionData | null;
}

export function initConfig(env: any): EnvConfig {
  return {
    PORT: env ? parseInt(env.PORT) : 9001,
    OPENAI_API_KEY: env.OPENAI_API_KEY || "",
    PROMPT_MAX_LENGTH: env ? parseInt(env.PROMPT_MAX_LENGTH) : 300,
    PROMPT_MAX_DURATION_MS: env ? parseInt(env.PROMPT_MAX_DURATION_MS) : 5000,
    DATABASES: env ? JSON.parse(env.DATABASES) : [],
    FEEDBACK_DATABASE: env ? JSON.parse(env.FEEDBACK_DATABASE) : null,
  };
}
