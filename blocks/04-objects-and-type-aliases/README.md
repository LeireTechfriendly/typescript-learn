# Block 04 — Objects & Type Aliases

## Topic
Object type literals, optional (`?`) and `readonly` properties, `type` aliases,
intersection types (`A & B`), nested object types, and index signatures
(`{ [key: string]: number }`).

## Key points
- `type` gives a reusable name to any type, not just objects.
- Intersections merge object shapes; optional vs required properties.
- Index signatures model dictionaries with unknown keys.

## Exercises
1. Define a `User` type and a `makeUser` factory.
2. `mergeConfig(base, override)` using an intersection.
3. Build a typed `wordCount` dictionary with an index signature.
4. Mark some properties `readonly` and prove mutation is rejected.

Run: `npx vitest blocks/04-objects-and-type-aliases`
