# Block 03 — Functions

Functions are where annotations earn their keep. This block covers typing them
thoroughly: parameters, returns, optional and default parameters, rest parameters,
function *type expressions*, and how callbacks get their types for free.

## Parameter & return annotations

Parameters **always** need annotations — TS can't infer them. The return type usually
*can* be inferred, so annotating it is optional but good for clarity:

```ts
function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
```

## Optional & default parameters

A default value makes a parameter optional at the call site, and TS infers its type
from the default:

```ts
function greet(name: string, greeting = "Hello"): string {
  return `${greeting}, ${name}!`;
}

greet("Ada");        // "Hello, Ada!"
greet("Ada", "Hi");  // "Hi, Ada!"
```

You can also mark a parameter optional with `?` (its type becomes `T | undefined`).
Optional/defaulted parameters must come **after** all required ones:

```ts
function f(a: number, b?: number) {}   // ok
// function g(a?: number, b: number) {} // ❌ required param after optional
```

## Rest parameters

Collect "the rest" of the arguments into a typed array:

```ts
function sum(...nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
}
sum();          // 0
sum(1, 2, 3);   // 6
```

## Function type expressions & callbacks

You can describe a function's *shape* as a type and use it to annotate a callback
parameter. The callback's parameters are then **contextually typed** — you don't
re-annotate them at the call site:

```ts
type NumberOp = (n: number) => number;

function mapArray(items: number[], fn: NumberOp): number[] {
  return items.map(fn);
}

mapArray([1, 2, 3], (n) => n * 2); // n is inferred as number — no annotation needed
```

## `void` returns

A `void` return type means "the caller shouldn't rely on a return value." Notably, a
function that *does* return a value is still assignable where a `void` callback is
expected (that's why `arr.forEach(x => arr.push(x))` type-checks):

```ts
function each(items: number[], fn: (n: number) => void): void {
  for (const item of items) fn(item);
}
```

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/03-functions
```

1. `sum(...nums)` — variadic sum using **rest parameters**. `sum()` is `0`.
2. `clamp(value, min, max)` — constrain a number to the `[min, max]` range.
3. `mapArray(items, fn)` — a **higher-order** function: apply `fn` to every number
   and return the new array. Type the callback with a function type expression.
4. `greet(name, greeting?)` — a **default parameter**: `greeting` defaults to `"Hello"`.

Then compare with [`solutions/`](./solutions).
