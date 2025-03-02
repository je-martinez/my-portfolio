export type EnvironmentConfig = {
  environment: Environment;
  sanity: SanityConfig;
};

export type SanityConfig = {
  projectId: string;
  dataset: string;
  readToken: string;
};

export enum AvailableEnvironments {
  Development = "development",
  Production = "production",
}

export type Environment =
  (typeof AvailableEnvironments)[keyof typeof AvailableEnvironments];
