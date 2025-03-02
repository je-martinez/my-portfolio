import {
  AvailableEnvironments,
  type Environment,
  type EnvironmentConfig,
} from "../../types";

import { loadEnv } from "vite";

const env = loadEnv(import.meta.env.MODE, process.cwd(), "");

export const environment = (): EnvironmentConfig => {
  const environment = env.ENVIRONMENT;
  const sanity = {
    projectId: env.SANITY_PROJECT_ID,
    dataset: env.SANITY_DATASET,
    readToken: env.SANITY_READ_TOKEN,
  };

  return { environment: environment as Environment, sanity };
};

export const isDevelopment = (): boolean => {
  return environment().environment === AvailableEnvironments.Development;
};

export const isProduction = (): boolean => {
  return environment().environment === AvailableEnvironments.Production;
};
