// Verifies the reference solution. Run with:  npm run test:solutions
// Students don't need this file — it guarantees the answers in
// exercises.solution.ts actually pass the same cases as the exercises.
import { describe, it, expect } from "vitest";
import { greet, add, toUpperCaseSafe, isEven } from "./exercises.solution";

describe("Block 01 — solution", () => {
  it("greet returns a greeting", () => {
    expect(greet("Ada")).toBe("Hello, Ada!");
    expect(greet("World")).toBe("Hello, World!");
  });

  it("add sums two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-4, 4)).toBe(0);
  });

  it("toUpperCaseSafe uppercases text", () => {
    expect(toUpperCaseSafe("hello")).toBe("HELLO");
    expect(toUpperCaseSafe("TypeScript")).toBe("TYPESCRIPT");
  });

  it("isEven detects even numbers", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(7)).toBe(false);
    expect(isEven(0)).toBe(true);
  });
});
