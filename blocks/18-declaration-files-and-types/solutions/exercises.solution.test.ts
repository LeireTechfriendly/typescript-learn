// Verifies the reference solution. Run with:  npm run test:solutions
import { describe, it, expect, expectTypeOf } from "vitest";
import { shout, LANG } from "./legacy";

describe("Block 18 — solution", () => {
  it("legacy.js is typed by legacy.d.ts and runs", () => {
    expect(shout("hi")).toBe("HI!");
    expect(LANG).toBe("js");
  });

  it("has the right types", () => {
    expectTypeOf(shout).toEqualTypeOf<(message: string) => string>();
    expectTypeOf(LANG).toEqualTypeOf<string>();
  });
});
