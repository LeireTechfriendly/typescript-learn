// Block 09 — Narrowing: worked examples
// Run me:  npx tsx blocks/09-narrowing/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// typeof narrowing.
function pad(x: string | number): string {
  if (typeof x === "number") return " ".repeat(x) + "#";
  return x.padStart(4, "."); // x is string here
}
console.log(pad(3), "|", pad("hi"));

// User-defined type guard.
function isString(value: unknown): value is string {
  return typeof value === "string";
}
const mixed: unknown[] = ["a", 1, "b", true];
console.log("strings:", mixed.filter(isString)); // ["a", "b"]

// Discriminated union + exhaustive switch.
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    default: {
      const _exhaustive: never = shape;
      return _exhaustive;
    }
  }
}
console.log("area(square 3):", area({ kind: "square", size: 3 })); // 9

// `in` narrowing.
type WithEmail = { email: string };
type WithPhone = { phone: string };
function contact(c: WithEmail | WithPhone): string {
  return "email" in c ? c.email : c.phone;
}
console.log(contact({ email: "a@b.c" }), contact({ phone: "123" }));
