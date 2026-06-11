// Block 01 — Exercises
// Implement each TODO. Add type annotations to every parameter and return type.
// Run tests:  npx vitest blocks/01-getting-started

// 1. Return a greeting like "Hello, Ada!"
export function greet(name: string): string {
  return `Hello, ` + name +  `!`;
}

// 2. Return the sum of two numbers.
export function add(a: number, b: number): number {
  return a + b;
}

// 3. Return the uppercased version of the given text.
export function toUpperCaseSafe(text: string): string {
  return text.toUpperCase();
}

// 4. Return true if n is even, false otherwise.
export function isEven(n: number): boolean {
  let division : number = n % 2;
  return division  == 0;
}
