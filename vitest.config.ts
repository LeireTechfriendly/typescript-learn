import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Look for *.test.ts files anywhere under blocks/
    include: ["blocks/**/*.test.ts"],
    globals: true,
    environment: "node",
  },
});
