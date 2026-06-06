# Block 03 — Functions

## Topic
Typing functions thoroughly: parameter and return annotations, optional (`?`) and
default parameters, rest parameters (`...args: number[]`), function type expressions
(`type Op = (a: number, b: number) => number`), call signatures, and how TypeScript
contextually types callback parameters.

## Key points
- Parameters always need annotations; return types are usually inferred.
- Optional params must come after required ones; defaults imply the type.
- `void` return type and why callbacks returning values are still assignable to it.

## Exercises
1. `sum(...nums)` — variadic sum using rest parameters.
2. `clamp(value, min, max)` — constrain a number to a range.
3. `mapArray(items, fn)` — a typed higher-order function (generic-lite).
4. `greet(name, greeting?)` — optional parameter with a default.

Run: `npx vitest blocks/03-functions`
