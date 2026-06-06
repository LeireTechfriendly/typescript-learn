// Block 03 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export function sum(...nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

type NumberOp = (n: number) => number;

export function mapArray(items: number[], fn: NumberOp): number[] {
  return items.map(fn);
}

export function greet(name: string, greeting = "Hello"): string {
  return `${greeting}, ${name}!`;
}

// Notes:
// - `...nums: number[]` collects every argument into a typed array; reduce from 0
//   makes the empty call return 0 cleanly.
// - clamp composes Math.max (floor) and Math.min (ceiling); order doesn't matter
//   for a valid [min, max] range.
// - `NumberOp` is a function type expression. Passing it to mapArray lets the
//   callback's `n` be inferred — no annotation needed at the call site.
// - `greeting = "Hello"` is a default parameter: it makes the argument optional
//   AND infers its type as string, so no `?` or explicit annotation is needed.
