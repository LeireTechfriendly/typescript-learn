import { describe, it, expect, expectTypeOf } from "vitest";
import {
  makeUser,
  mergeConfig,
  wordCount,
  withDefaults,
  type ResolvedSettings,
} from "../src/exercises";

describe("Block 04 — Objects & Type Aliases", () => {
  it("makeUser builds a User object", () => {
    expect(makeUser(1, "Ada")).toEqual({ id: 1, name: "Ada" });
  });

  it("mergeConfig lets override win", () => {
    expect(mergeConfig({ host: "localhost", port: 80 }, { port: 443 })).toEqual({
      host: "localhost",
      port: 443,
    });
    expect(mergeConfig({}, { debug: true })).toEqual({ debug: true });
  });

  it("wordCount tallies occurrences", () => {
    expect(wordCount(["a", "b", "a", "a", "b"])).toEqual({ a: 3, b: 2 });
    expect(wordCount([])).toEqual({});
  });

  it("withDefaults fills missing settings", () => {
    expect(withDefaults({})).toEqual({ theme: "light", fontSize: 14 });
    expect(withDefaults({ theme: "dark" })).toEqual({
      theme: "dark",
      fontSize: 14,
    });
  });

  it("has the right types", () => {
    // After defaults, the result has no optional fields.
    expectTypeOf(withDefaults).returns.toEqualTypeOf<ResolvedSettings>();
  });
});
