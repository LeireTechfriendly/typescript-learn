# Block 01 — Getting Started

## What is TypeScript?

TypeScript is JavaScript **with a type system added on top**. You write `.ts` files,
the TypeScript **compiler** checks your types, and then *erases* them to produce plain
`.js` that runs anywhere JavaScript runs. The types exist only at development time —
they catch mistakes before your code ever runs.

```
your code (.ts)  ──tsc──▶  plain JavaScript (.js)
        ▲
        └── type errors reported here, at compile time
```

The big win: the compiler tells you about bugs (typos, wrong argument types, missing
properties) **while you type**, instead of at 2 a.m. in production.

## Type inference vs. explicit annotations

You don't have to annotate everything. TypeScript **infers** types when it can:

```ts
let count = 5;        // inferred as number
count = "hello";      // ❌ Error: Type 'string' is not assignable to type 'number'
```

You add an **annotation** with `: Type` when inference isn't enough — most importantly
on function parameters, which TS cannot infer on its own:

```ts
function double(n: number): number {
  return n * 2;
}
```

Here `n: number` is the parameter annotation and `: number` after the parentheses is
the return type. The return type is often inferable, so annotating it is optional but
good practice for public functions.

## Running TypeScript

- **Type-check the whole project:** `npm run typecheck` (runs `tsc --noEmit`).
- **Run a single file directly:** `npx tsx blocks/01-getting-started/src/examples.ts`.
- **Run this block's tests:** `npx vitest blocks/01-getting-started`.

`tsx` runs `.ts` files without a separate compile step — perfect for experimenting.

## Key idea: the compiler is your pair programmer

Under this repo's `strict` settings, TypeScript is opinionated on purpose. Treat each
red squiggle as a question: *"Do I really know what type this value is here?"* Answering
that question is the whole skill.

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts) and implement each `// TODO`. Then run:

```bash
npx vitest blocks/01-getting-started
```

1. `greet(name)` — return `"Hello, <name>!"`, with a properly typed parameter and return.
2. `add(a, b)` — return the sum of two numbers (typed).
3. `toUpperCaseSafe(text)` — return the uppercased string.
4. `isEven(n)` — return a boolean indicating whether `n` is even.

When all tests are green, compare your work with [`solutions/`](./solutions).
