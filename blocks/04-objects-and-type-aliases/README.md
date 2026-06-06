# Block 04 — Objects & Type Aliases

**English** · [Українська](./README.uk.md)

How to describe the *shape* of objects and give those shapes reusable names.

## Object type literals

An object type lists each property and its type:

```ts
let user: { name: string; age: number } = { name: "Ada", age: 36 };
```

Properties can be **optional** with `?` and **immutable** with `readonly`:

```ts
type Point = {
  readonly x: number; // can't be reassigned after creation
  readonly y: number;
  label?: string;     // may be absent — its type is string | undefined
};

const p: Point = { x: 1, y: 2 };
// p.x = 9; // ❌ Cannot assign to 'x' because it is a read-only property
```

## `type` aliases

`type` gives any type a reusable name — not only objects:

```ts
type ID = string | number;
type User = { id: ID; name: string };
```

## Intersection types (`&`)

`A & B` is a value that satisfies **both** shapes — handy for merging:

```ts
type WithTimestamps = { createdAt: number; updatedAt: number };
type Post = { title: string } & WithTimestamps;
// Post requires title, createdAt AND updatedAt.
```

## Index signatures

When keys aren't known ahead of time, describe them generically:

```ts
type Counts = { [word: string]: number };
const wordCount: Counts = {};
wordCount["hello"] = 1; // any string key maps to a number
```

> Under `noUncheckedIndexedAccess`, reading `wordCount["missing"]` is typed as
> `number | undefined` — you must handle the absent case.

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/04-objects-and-type-aliases
```

1. `makeUser(id, name)` — return a `User` object built from a `type` alias.
2. `mergeConfig(base, override)` — merge two partial config objects with an
   **intersection**-friendly result; `override` wins on conflicts.
3. `wordCount(words)` — count occurrences into a dictionary typed with an
   **index signature** (`Record`-like).
4. `withDefaults(settings)` — fill missing **optional** properties with defaults.

Then compare with [`solutions/`](./solutions).
