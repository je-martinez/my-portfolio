import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { sanityClient } from "sanity:client";

const { projectId, dataset } = sanityClient.config();

export default defineConfig({
  name: "my-portfolio",
  title: "My Portfolio",
  projectId: projectId as string,
  dataset: dataset as string,
  plugins: [structureTool()],
  schema: {
    types: [],
  },
});
