import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  adapter: vercel(),
});
