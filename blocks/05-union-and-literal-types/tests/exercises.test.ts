import { describe, it, expect, expectTypeOf } from "vitest";
import {
  nextLight,
  handle,
  formatId,
  isWeekday,
  type Weekday,
} from "../src/exercises";

describe("Block 05 — Union & Literal Types", () => {
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
    // `as const` + indexed access derives the exact literal union.
    expectTypeOf<Weekday>().toEqualTypeOf<"Mon" | "Tue" | "Wed" | "Thu" | "Fri">();
    expectTypeOf(formatId).returns.toEqualTypeOf<string>();
  });
});
