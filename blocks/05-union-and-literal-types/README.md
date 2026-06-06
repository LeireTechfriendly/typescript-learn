# Block 05 — Union & Literal Types

Union and literal types are how TypeScript models "one of a fixed set of options" —
the foundation of safe state machines and discriminated data.

## Union types

A union `A | B` holds a value that is **either** type:

```ts
function formatId(id: string | number): string {
  return typeof id === "number" ? id.toString() : id;
}
```

You usually have to **narrow** a union (check which member you have) before using it —
here `typeof` does that. More on narrowing in block 09.

## Literal types

A literal type is a *single exact value* used as a type:

```ts
let dir: "left" | "right";
dir = "left";   // ok
// dir = "up";  // ❌ Type '"up"' is not assignable to type '"left" | "right"'
```

Combining literals into a union models a finite set of valid states:

```ts
type Light = "red" | "yellow" | "green";
```

The compiler now rejects any value outside that set — typos become compile errors.

## `as const`

By default `["a", "b"]` is inferred as `string[]`. Adding `as const` freezes it into a
**readonly tuple of literals**, from which you can derive a union with `typeof`/indexed
access:

```ts
const ROLES = ["admin", "user", "guest"] as const;
type Role = (typeof ROLES)[number]; // "admin" | "user" | "guest"
```

This keeps a single source of truth: the runtime array and the type stay in sync.

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/05-union-and-literal-types
```

1. `nextLight(current)` — given a traffic `Light`, return the next one in the cycle
   `red → green → yellow → red`.
2. `handle(method)` — map an `HttpMethod` (`"GET" | "POST" | "PUT" | "DELETE"`) to a
   verb: reading / creating / updating / removing.
3. `formatId(id)` — accept `string | number` and always return a `string`.
4. `isWeekday(day)` — check membership against a `WEEKDAYS` tuple derived with
   `as const` (see the given `Weekday` type).

Then compare with [`solutions/`](./solutions).
