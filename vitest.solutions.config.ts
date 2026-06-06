import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Author/CI check: run the reference solutions against the same cases
    // to guarantee every solution actually passes. Not part of `npm test`.
    include: ["blocks/**/solutions/*.solution.test.ts"],
    globals: true,
    environment: "node",
  },
});
