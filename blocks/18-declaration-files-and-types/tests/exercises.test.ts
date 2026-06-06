// legacy.js runs regardless; this block is about its TYPES (from legacy.d.ts).
// While legacy.d.ts is incomplete, `npm run typecheck` flags the imports below.
import { describe, it, expect, expectTypeOf } from "vitest";
import { shout, LANG } from "../src/legacy";

describe("Block 18 — Declaration Files & @types", () => {
  it("legacy.js is typed by legacy.d.ts and runs", () => {
    expect(shout("hi")).toBe("HI!");
    expect(LANG).toBe("js");
  });

  it("has the right types", () => {
    expectTypeOf(shout).toEqualTypeOf<(message: string) => string>();
    expectTypeOf(LANG).toEqualTypeOf<string>();
  });
});
