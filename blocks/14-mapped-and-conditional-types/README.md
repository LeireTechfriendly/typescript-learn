# Block 14 — Mapped & Conditional Types

## Topic
Mapped types (`{ [K in keyof T]: ... }`) with modifiers (`-?`, `-readonly`), conditional
types (`T extends U ? X : Y`), and `infer`.

## Exercises
1. Implement your own `MyPartial<T>` and `MyReadonly<T>`.
2. Write `Nullable<T>` mapping each property to `T[K] | null`.
3. Build `Flatten<T>` that unwraps array element types using `infer`.

Run: `npx vitest blocks/14-mapped-and-conditional-types`
