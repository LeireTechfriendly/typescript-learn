// Block 02 — Exercises
// Run tests:  npx vitest blocks/02-basic-types

// 1. Return a tuple of the first and last element of a non-empty string array.
export function firstAndLast(items: string[]): [string, string] {
  void items; // remove this line once you use the parameter
  // TODO: return [items[0], items[items.length - 1]] (typed as a tuple)
  throw new Error("Not implemented");
}

// 2. Sum all numbers in the array.
export function sumAll(nums: number[]): number {
  void nums; // remove this line once you use the parameter
  // TODO: add them up and return the total
  throw new Error("Not implemented");
}

// 3. Narrow an unknown value to describe its runtime type.
//    Return "string" | "number" | "boolean" | "other".
export function describeValue(value: unknown): string {
  void value; // remove this line once you use the parameter
  // TODO: use typeof checks to return the correct label
  throw new Error("Not implemented");
}

// 4. Return the numbers typed as a readonly array.
export function makeReadonly(nums: number[]): readonly number[] {
  void nums; // remove this line once you use the parameter
  // TODO: return nums (the return type already enforces readonly)
  throw new Error("Not implemented");
}
