// Verifies the reference solution. Run with:  npm run test:solutions
import { describe, it, expect, expectTypeOf } from "vitest";
import {
  nextLight,
  handle,
  formatId,
  isWeekday,
  type Weekday,
} from "./exercises.solution";

describe("Block 05 — solution", () => {
  it("nextLight cycles red -> green -> yellow -> red", () => {
    expect(nextLight("red")).toBe("green");
    expect(nextLight("green")).toBe("yellow");
    expect(nextLight("yellow")).toBe("red");
  });

  it("handle maps methods to verbs", () => {
    expect(handle("GET")).toBe("reading");
    expect(handle("POST")).toBe("creating");
    expect(handle("PUT")).toBe("updating");
    expect(handle("DELETE")).toBe("removing");
  });

  it("formatId normalizes to a string", () => {
    expect(formatId(42)).toBe("42");
    expect(formatId("abc")).toBe("abc");
  });

  it("isWeekday checks membership", () => {
    expect(isWeekday("Mon")).toBe(true);
    expect(isWeekday("Fri")).toBe(true);
    expect(isWeekday("Sun")).toBe(false);
    expect(isWeekday("")).toBe(false);
  });

  it("has the right types", () => {
    expectTypeOf<Weekday>().toEqualTypeOf<"Mon" | "Tue" | "Wed" | "Thu" | "Fri">();
    expectTypeOf(formatId).returns.toEqualTypeOf<string>();
  });
});
