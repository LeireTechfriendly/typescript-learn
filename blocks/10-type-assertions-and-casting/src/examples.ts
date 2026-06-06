// Block 10 — Type Assertions & Casting: worked examples
// Run me:  npx tsx blocks/10-type-assertions-and-casting/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// `as` after a runtime check is the safe way to assert.
type Point = { x: number; y: number };
const raw: unknown = JSON.parse('{"x":1,"y":2}');
if (
  typeof raw === "object" &&
  raw !== null &&
  "x" in raw &&
  "y" in raw &&
  typeof (raw as Record<string, unknown>).x === "number" &&
  typeof (raw as Record<string, unknown>).y === "number"
) {
  const point = raw as Point; // safe: shape verified above
  console.log("point:", point);
}

// Non-null assertion.
const items = [10, 20, 30];
const first = items[0]!; // we know index 0 exists
console.log("first:", first);

// satisfies validates without widening.
type Config = { host: string; port: number; env: "dev" | "prod" };
const config = {
  host: "localhost",
  port: 8080,
  env: "prod",
} satisfies Config;
console.log("config.env:", config.env); // type stays "prod", not string

// Dangerous: `as any` silences the compiler and hides real bugs.
const sneaky = "not a number" as unknown as number;
console.log("sneaky + 1:", sneaky + 1); // "not a number1" at runtime — yikes
