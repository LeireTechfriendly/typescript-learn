// Verifies the reference solution. Run with:  npm run test:solutions
import { describe, it, expect } from "vitest";
import { sum, clamp, mapArray, greet } from "./exercises.solution";

describe("Block 03 — solution", () => {
  it("sum adds any number of arguments", () => {
    expect(sum()).toBe(0);
    expect(sum(42)).toBe(42);
    expect(sum(1, 2, 3, 4)).toBe(10);
    expect(sum(-5, 5)).toBe(0);
  });

  it("clamp constrains a value to the range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-3, 0, 10)).toBe(0);
    expect(clamp(99, 0, 10)).toBe(10);
    expect(clamp(0, 0, 10)).toBe(0);
  });

  it("mapArray applies the callback to every item", () => {
    expect(mapArray([1, 2, 3], (n) => n * 2)).toEqual([2, 4, 6]);
    expect(mapArray([], (n) => n + 1)).toEqual([]);
    expect(mapArray([4], (n) => n - 1)).toEqual([3]);
  });

  it("greet uses the default greeting when omitted", () => {
    expect(greet("Ada")).toBe("Hello, Ada!");
    expect(greet("Ada", "Hi")).toBe("Hi, Ada!");
  });
});
