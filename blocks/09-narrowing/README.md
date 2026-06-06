# Block 09 — Narrowing

"Narrowing" is how TypeScript reduces a wide type (a union, `unknown`) to a more
specific one based on checks you write. It's the everyday skill that makes unions safe.

## Built-in narrowing

```ts
function pad(x: string | number) {
  if (typeof x === "number") {
    return " ".repeat(x); // x is number here
  }
  return x.padStart(4); //  x is string here
}
```

- `typeof` — primitives (`"string"`, `"number"`, `"boolean"`, …).
- `instanceof` — class instances.
- `in` — does an object have a given property?
- truthiness (`if (x)`) and equality (`x === "a"`) also narrow.

## The `in` operator

Use `in` to tell apart object shapes by which keys they have:

```ts
type WithEmail = { email: string };
type WithPhone = { phone: string };

function contact(c: WithEmail | WithPhone): string {
  return "email" in c ? c.email : c.phone;
}
```

## User-defined type guards (`x is T`)

A function returning `value is T` teaches the compiler to narrow at the call site:

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

const items: unknown[] = ["a", 1, "b"];
const strings = items.filter(isString); // string[] — narrowed by the guard
```

## Discriminated unions + exhaustiveness

Give each variant a shared literal "tag" (the *discriminant*). A `switch` on the tag
narrows to each variant, and a `never` default proves you handled them all:

```ts
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
      const _exhaustive: never = shape; // ❌ if a variant is unhandled
      return _exhaustive;
    }
  }
}
```

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/09-narrowing
```

1. `area(shape)` — compute the area of a `Shape` **discriminated union** (circle,
   square, rectangle), exhaustively.
2. `isString(value)` — a user-defined **type guard** (`value is string`).
3. `reducer(state, action)` — apply an `Action` discriminated union to a number,
   with a `never` default.
4. `contactMethod(contact)` — use the **`in`** operator to pick email or phone.

Then compare with [`solutions/`](./solutions).
