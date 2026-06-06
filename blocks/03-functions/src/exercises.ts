// Block 03 — Exercises
// Run tests:  npx vitest blocks/03-functions

// 1. Sum any number of arguments using a rest parameter. sum() must return 0.
export function sum(...nums: number[]): number {
  void nums; // remove this line once you use the parameter
  // TODO: add them all up (reduce starting from 0) and return the total
  throw new Error("Not implemented");
}

// 2. Constrain `value` so the result is never below `min` nor above `max`.
export function clamp(value: number, min: number, max: number): number {
  void value;
  void min;
  void max; // remove these lines once you use the parameters
  // TODO: return value bounded to the [min, max] range
  throw new Error("Not implemented");
}

// 3. Higher-order function: apply `fn` to every item and return the new array.
//    `NumberOp` is a function type expression describing the callback's shape.
type NumberOp = (n: number) => number;

export function mapArray(items: number[], fn: NumberOp): number[] {
  void items;
  void fn; // remove these lines once you use the parameters
  // TODO: return a new array where each item has been passed through fn
  throw new Error("Not implemented");
}

// 4. Default parameter: `greeting` defaults to "Hello".
//    greet("Ada") -> "Hello, Ada!"   greet("Ada", "Hi") -> "Hi, Ada!"
export function greet(name: string, greeting = "Hello"): string {
  void name;
  void greeting; // remove these lines once you use the parameters
  // TODO: return `${greeting}, ${name}!`
  throw new Error("Not implemented");
}
