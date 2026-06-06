// Verifies the reference solution. Run with:  npm run test:solutions
import { describe, it, expect, expectTypeOf } from "vitest";
import {
  area,
  isString,
  reducer,
  contactMethod,
  type Shape,
} from "./exercises.solution";

describe("Block 09 — solution", () => {
  it("area handles every Shape variant", () => {
    expect(area({ kind: "circle", radius: 2 })).toBeCloseTo(Math.PI * 4, 10);
    expect(area({ kind: "square", size: 3 })).toBe(9);
    expect(area({ kind: "rectangle", width: 3, height: 4 })).toBe(12);
  });

  it("isString narrows unknown values", () => {
    expect(isString("hi")).toBe(true);
    expect(isString(42)).toBe(false);
    expect(isString(null)).toBe(false);
    const mixed: unknown[] = ["a", 1, "b"];
    expect(mixed.filter(isString)).toEqual(["a", "b"]);
  });

  it("reducer applies actions", () => {
    expect(reducer(5, { type: "increment" })).toBe(6);
    expect(reducer(5, { type: "decrement" })).toBe(4);
    expect(reducer(5, { type: "set", value: 99 })).toBe(99);
  });

  it("contactMethod picks email or phone via `in`", () => {
    expect(contactMethod({ email: "a@b.c" })).toBe("a@b.c");
    expect(contactMethod({ phone: "123" })).toBe("123");
  });

  it("has the right types", () => {
    expectTypeOf(isString).guards.toEqualTypeOf<string>();
    expectTypeOf<Shape["kind"]>().toEqualTypeOf<"circle" | "square" | "rectangle">();
  });
});
