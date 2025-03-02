export type EnvironmentConfig = {
  environment: Environment;
  sanity: SanityConfig;
  websiteMode: WebsiteMode;
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

export enum AvailableWebiteModes {
  Live = "live",
  UnderConstruction = "under-construction",
  Maintenance = "maintenance",
}

export type Environment =
  (typeof AvailableEnvironments)[keyof typeof AvailableEnvironments];

export enum AvailableWebsiteModes {
  Live = "live",
  UnderConstruction = "under-construction",
  Maintenance = "maintenance",
}

export type WebsiteMode =
  (typeof AvailableWebsiteModes)[keyof typeof AvailableWebsiteModes];
