# Block 13 — keyof, typeof & Indexed Access

## Topic
The `keyof` operator, `typeof` in type position, and indexed access types (`T[K]`),
combined for type-safe property access.

## Exercises
1. Type-safe `getProperty<T, K extends keyof T>(obj, key)`.
2. Derive a type from a runtime constant via `typeof`.
3. Build a union of a type`s value types using indexed access.

Run: `npx vitest blocks/13-keyof-typeof-indexed-access`
