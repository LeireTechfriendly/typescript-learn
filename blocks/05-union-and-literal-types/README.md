# Block 05 — Union & Literal Types

## Topic
Union types (`string | number`), literal types (`"GET" | "POST"`), combining them to
model finite state, and `as const`. First taste of narrowing a union before use.

## Exercises
1. `nextLight(current)` — model a traffic light with literal unions.
2. `handle(method)` — route over `"GET" | "POST" | "PUT" | "DELETE"`.
3. `formatId(id)` — accept `string | number` and normalize to string.
4. Use `as const` to derive a literal union from an array.

Run: `npx vitest blocks/05-union-and-literal-types`
