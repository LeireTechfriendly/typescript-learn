// Block 10 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export type Point = { x: number; y: number };
export type Config = { host: string; port: number; env: "dev" | "prod" };

export function parsePoint(json: string): Point {
  const data: unknown = JSON.parse(json);
  if (
    typeof data === "object" &&
    data !== null &&
    "x" in data &&
    "y" in data &&
    typeof (data as Record<string, unknown>).x === "number" &&
    typeof (data as Record<string, unknown>).y === "number"
  ) {
    // Safe: we verified x and y are numbers before asserting.
    return data as Point;
  }
  throw new Error("invalid point");
}

export function buildConfig(): Config {
  return {
    host: "localhost",
    port: 8080,
    env: "prod",
  } satisfies Config;
}

export function getLength(value: unknown): number {
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length; // narrowed — no `as any` needed
  }
  return 0;
}

// Notes:
// - `as Point` is only safe because the preceding checks prove the shape. The
//   intermediate `as Record<string, unknown>` lets us read unknown keys to test them.
// - `satisfies Config` validates the object literal (catching typos / wrong types)
//   without widening it to exactly Config.
// - getLength uses typeof + Array.isArray to narrow, so `.length` is type-safe and we
//   never reach for the escape hatch `as any`.
