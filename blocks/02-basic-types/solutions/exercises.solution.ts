// Block 02 — Reference solutions

export function firstAndLast(items: string[]): [string, string] {
  // Non-null assertions (!) tell TS these are defined because the tests
  // always pass a non-empty array. Under noUncheckedIndexedAccess, indexing
  // an array yields `string | undefined`, so we assert non-undefined here.
  return [items[0]!, items[items.length - 1]!];
}

export function sumAll(nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
}

export function describeValue(value: unknown): string {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  if (typeof value === "boolean") return "boolean";
  return "other";
}

export function makeReadonly(nums: number[]): readonly number[] {
  return nums;
}

// Notes:
// - A tuple type [string, string] is stricter than string[]: it fixes the length.
// - `unknown` cannot be used until narrowed — typeof guards do the narrowing.
// - The readonly return type prevents callers from mutating the array.
