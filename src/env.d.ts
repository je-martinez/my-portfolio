/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
  readonly ENVIRONMENT: string;
  readonly SANITY_PROJECT_ID: string;
  readonly SANITY_DATASET: string;
  readonly SANITY_READ_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
