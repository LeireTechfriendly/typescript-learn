// Block 03 — Exercises
// Run tests:  npx vitest blocks/03-functions

// 1. Sum any number of arguments using a rest parameter. sum() must return 0.
export function sum(...nums: number[]): number {
  // TODO: add them all up (reduce starting from 0) and return the total
  return nums.reduce((total, n) => total + n, 0);
}

// 2. Constrain `value` so the result is never below `min` nor above `max`.
export function clamp(value: number, min: number, max: number): number {
  // TODO: return value bounded to the [min, max] range
  return Math.min(Math.max(value, min), max);
}

// 3. Higher-order function: apply `fn` to every item and return the new array.
//    `NumberOp` is a function type expression describing the callback's shape.
type NumberOp = (n: number) => number;

export function mapArray(items: number[], fn: NumberOp): number[] {
  // TODO: return a new array where each item has been passed through fn
  return items.map(fn);
}

// 4. Default parameter: `greeting` defaults to "Hello".
//    greet("Ada") -> "Hello, Ada!"   greet("Ada", "Hi") -> "Hi, Ada!"
export function greet(name: string, greeting = "Hello"): string {
  // TODO: return `${greeting}, ${name}!`
  return `${greeting}, ${name}!`;
}
