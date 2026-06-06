// Block 01 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function add(a: number, b: number): number {
  return a + b;
}

export function toUpperCaseSafe(text: string): string {
  return text.toUpperCase();
}

export function isEven(n: number): boolean {
  return n % 2 === 0;
}

// Notes:
// - Parameters MUST be annotated; TS can't infer them.
// - Return types here are also annotated for clarity, though TS could infer them.
// - `n % 2 === 0` returns a boolean, matching the declared return type.
