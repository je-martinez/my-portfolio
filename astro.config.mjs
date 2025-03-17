// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { environment, isProduction } from "./src/config/environment";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: environment().sanity.projectId,
      dataset: environment().sanity.dataset,
      token: environment().sanity.readToken,
      useCdn: isProduction(),
      studioBasePath: "/admin",
    }),
    react(),
  ],
});
