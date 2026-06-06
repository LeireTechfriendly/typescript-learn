import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Student-facing tests live under each block's tests/ folder.
    // Solution checks (solutions/*.solution.test.ts) are run separately
    // via `npm run test:solutions` and intentionally excluded here.
    include: ["blocks/**/tests/*.test.ts"],
    globals: true,
    environment: "node",
  },
});
