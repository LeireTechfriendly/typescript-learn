// Verifies the reference solution. Run with:  npm run test:solutions
import { describe, it, expect, expectTypeOf } from "vitest";
import {
  firstAndLast,
  sumAll,
  describeValue,
  makeReadonly,
} from "./exercises.solution";

describe("Block 02 — solution", () => {
  it("firstAndLast returns first and last as a tuple", () => {
    expect(firstAndLast(["a", "b", "c"])).toEqual(["a", "c"]);
    expect(firstAndLast(["solo"])).toEqual(["solo", "solo"]);
  });

  it("sumAll adds every number", () => {
    expect(sumAll([1, 2, 3, 4])).toBe(10);
    expect(sumAll([])).toBe(0);
  });

  it("describeValue labels runtime types", () => {
    expect(describeValue("hi")).toBe("string");
    expect(describeValue(42)).toBe("number");
    expect(describeValue(true)).toBe("boolean");
    expect(describeValue({})).toBe("other");
    expect(describeValue(null)).toBe("other");
  });

  it("makeReadonly returns the same values", () => {
    expect(makeReadonly([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("has the right types", () => {
    expectTypeOf(firstAndLast).returns.toEqualTypeOf<[string, string]>();
    expectTypeOf(makeReadonly).returns.toEqualTypeOf<readonly number[]>();
  });
});
