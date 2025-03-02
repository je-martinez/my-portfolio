/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly ENVIRONMENT: string;
  readonly SANITY_PROJECT_ID: string;
  readonly SANITY_DATASET: string;
  readonly SANITY_READ_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
