import {
  AvailableEnvironments,
  AvailableWebsiteModes,
  type Environment,
  type EnvironmentConfig,
  type WebsiteMode,
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

  const websiteMode = env.WEBSITE_MODE || AvailableWebsiteModes.Live;

  return {
    environment: environment as Environment,
    sanity,
    websiteMode: websiteMode as WebsiteMode,
  };
};

export const isDevelopment = (): boolean => {
  return environment().environment === AvailableEnvironments.Development;
};

export const isProduction = (): boolean => {
  return environment().environment === AvailableEnvironments.Production;
};

export const isUnderConstruction = (): boolean => {
  return environment().websiteMode === AvailableWebsiteModes.UnderConstruction;
};

export const isMaintenance = (): boolean => {
  return environment().websiteMode === AvailableWebsiteModes.Maintenance;
};

export const isLive = (): boolean => {
  return environment().websiteMode === AvailableWebsiteModes.Live;
};
