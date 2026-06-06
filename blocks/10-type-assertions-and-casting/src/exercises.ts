// Block 10 — Exercises
// Run tests:  npx vitest blocks/10-type-assertions-and-casting

export type Point = { x: number; y: number };
export type Config = { host: string; port: number; env: "dev" | "prod" };

// 1. Parse JSON, verify it has numeric x and y, then return it as a Point.
//    Throw new Error("invalid point") if the shape is wrong.
export function parsePoint(json: string): Point {
  void json; // remove this line once you use the parameter
  // TODO: JSON.parse into `unknown`, validate the shape, then assert `as Point`
  throw new Error("Not implemented");
}

// 2. Return a config object, validated with `satisfies Config`.
//    Use host "localhost", port 8080, env "prod".
export function buildConfig(): Config {
  // TODO: return { ... } satisfies Config
  throw new Error("Not implemented");
}

// 3. Return the length of a string or array; 0 for anything else.
//    Do it with proper narrowing — no `as any`.
export function getLength(value: unknown): number {
  void value; // remove this line once you use the parameter
  // TODO: narrow to string/array, return .length, else 0
  throw new Error("Not implemented");
}
