// Verifies the reference solution. Run with:  npm run test:solutions
import { describe, it, expect, expectTypeOf } from "vitest";
import {
  tryParse,
  divide,
  getErrorMessage,
  type Result,
} from "./exercises.solution";

describe("Block 17 — solution", () => {
  it("tryParse returns a success or error result", () => {
    expect(tryParse('{"a":1}')).toEqual({ ok: true, value: { a: 1 } });

    const bad = tryParse("{not json");
    expect(bad.ok).toBe(false);
    if (!bad.ok) expect(bad.error).toBeInstanceOf(Error);
  });

  it("divide errors on divide-by-zero", () => {
    expect(divide(10, 2)).toEqual({ ok: true, value: 5 });
    expect(divide(1, 0)).toEqual({ ok: false, error: "division by zero" });
  });

  it("getErrorMessage narrows unknown errors", () => {
    expect(getErrorMessage(new Error("boom"))).toBe("boom");
    expect(getErrorMessage("oops")).toBe("oops");
    expect(getErrorMessage(42)).toBe("unknown error");
    expect(getErrorMessage(null)).toBe("unknown error");
  });

  it("has the right types", () => {
    expectTypeOf(divide).returns.toEqualTypeOf<Result<number, string>>();
  });
});
