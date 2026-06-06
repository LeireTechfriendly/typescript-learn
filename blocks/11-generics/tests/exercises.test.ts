import { describe, it, expect, expectTypeOf } from "vitest";
import { identity, first, Stack, pluck, merge } from "../src/exercises";

describe("Block 11 — Generics", () => {
  it("identity returns its argument", () => {
    expect(identity(42)).toBe(42);
    expect(identity("hi")).toBe("hi");
  });

  it("first returns the first item or undefined", () => {
    expect(first([1, 2, 3])).toBe(1);
    expect(first<string>([])).toBeUndefined();
  });

  it("Stack works LIFO", () => {
    const s = new Stack<number>();
    expect(s.size).toBe(0);
    s.push(1);
    s.push(2);
    expect(s.size).toBe(2);
    expect(s.peek()).toBe(2);
    expect(s.pop()).toBe(2);
    expect(s.pop()).toBe(1);
    expect(s.pop()).toBeUndefined();
  });

  it("pluck reads a property", () => {
    const user = { name: "Ada", age: 36 };
    expect(pluck(user, "name")).toBe("Ada");
    expect(pluck(user, "age")).toBe(36);
  });

  it("merge combines two objects", () => {
    expect(merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });

  it("has the right types", () => {
    // Instantiation expressions (no call) so these check signatures only.
    expectTypeOf(identity<number>).returns.toEqualTypeOf<number>();
    expectTypeOf(first<string>).returns.toEqualTypeOf<string | undefined>();
    expectTypeOf(pluck<{ name: string }, "name">).returns.toEqualTypeOf<string>();
    expectTypeOf(merge<{ a: number }, { b: string }>).returns.toEqualTypeOf<
      { a: number } & { b: string }
    >();
  });
});
