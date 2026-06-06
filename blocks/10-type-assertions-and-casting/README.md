# Block 10 — Type Assertions & Casting

An assertion tells the compiler "trust me, this value is type T." It changes types at
**compile time only** — it does no runtime checking. That power cuts both ways.

## `as` assertions

```ts
const el = document.getElementById("app") as HTMLDivElement;
```

`as` is **unchecked**: if you're wrong, you get a runtime bug the compiler can't catch.
Use it only when you genuinely know more than the compiler — ideally right after a
runtime check that proves the type:

```ts
const data: unknown = JSON.parse(input);
if (typeof data === "object" && data !== null && "x" in data) {
  // safe: we verified the shape before asserting
}
```

## Non-null assertion `!`

`x!` drops `null`/`undefined` from `x`'s type. Same deal — unchecked:

```ts
const first = items[0]!; // "I know this index exists"
```

## Double assertions

When two types don't overlap, TS blocks a direct `as`. `x as unknown as T` forces it —
a code smell that almost always means you should validate instead.

## `as const`

Asserts the *narrowest* literal types and makes everything `readonly` (see block 05).

## `satisfies`

`satisfies` checks a value against a type **without widening it**. You get validation
*and* keep the precise inferred type:

```ts
type Config = { host: string; port: number };

const config = {
  host: "localhost",
  port: 8080,
} satisfies Config;
// config.port is still the literal-ish narrow type, and a typo in a key is caught.
```

Rule of thumb: prefer `satisfies` over `as` for object literals — it validates instead
of overriding.

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/10-type-assertions-and-casting
```

1. `parsePoint(json)` — `JSON.parse` into `unknown`, **verify** it has numeric `x`/`y`,
   then return it as a `Point`; throw `"invalid point"` otherwise.
2. `buildConfig()` — return a config object validated with **`satisfies Config`**.
3. `getLength(value)` — replace an unsafe `(value as any).length` with proper
   **narrowing**: length of a string/array, else `0`.

Then compare with [`solutions/`](./solutions).
