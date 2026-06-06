// Verifies the reference solution. Run with:  npm run test:solutions
import { describe, it, expect, expectTypeOf } from "vitest";
import {
  parsePoint,
  buildConfig,
  getLength,
  type Point,
} from "./exercises.solution";

describe("Block 10 — solution", () => {
  it("parsePoint validates then returns the point", () => {
    expect(parsePoint('{"x":1,"y":2}')).toEqual({ x: 1, y: 2 });
    expect(() => parsePoint('{"x":1}')).toThrow("invalid point");
    expect(() => parsePoint('{"x":"a","y":2}')).toThrow("invalid point");
    expect(() => parsePoint('"nope"')).toThrow("invalid point");
  });

  it("buildConfig returns a valid config", () => {
    expect(buildConfig()).toEqual({
      host: "localhost",
      port: 8080,
      env: "prod",
    });
  });

  it("getLength narrows strings and arrays", () => {
    expect(getLength("abc")).toBe(3);
    expect(getLength([1, 2, 3, 4])).toBe(4);
    expect(getLength(42)).toBe(0);
    expect(getLength(null)).toBe(0);
    expect(getLength({})).toBe(0);
  });

  it("has the right types", () => {
    expectTypeOf(parsePoint).returns.toEqualTypeOf<Point>();
  });
});
