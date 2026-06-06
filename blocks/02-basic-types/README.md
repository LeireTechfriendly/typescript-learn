# Block 02 — Basic Types

A tour of the primitive and collection types you'll use every day.

## Primitives

```ts
let title: string = "TypeScript";
let year: number = 2026;       // all numbers are `number` (no int/float split)
let isFun: boolean = true;
let nothing: null = null;
let missing: undefined = undefined;
```

You rarely annotate these explicitly — inference handles it. Annotate when a variable
starts without a value:

```ts
let score: number;   // declared, not yet assigned
score = 100;
```

## Arrays

Two equivalent syntaxes:

```ts
const nums: number[] = [1, 2, 3];
const names: Array<string> = ["Ada", "Linus"];
```

A **`readonly`** array can't be mutated:

```ts
const frozen: readonly number[] = [1, 2, 3];
// frozen.push(4); // ❌ Property 'push' does not exist on a readonly array
```

## Tuples

A tuple is a **fixed-length array with a known type at each position**:

```ts
let point: [number, number] = [10, 20];
let entry: [string, number] = ["age", 30];
```

Great for pairs and "return two things" functions.

## `any`, `unknown`, `never`, `void`

- **`any`** — opts out of type checking. Avoid it; it defeats the purpose.
- **`unknown`** — the *safe* `any`. You can hold anything, but must **narrow** it
  (check its type) before using it.
- **`void`** — a function that returns nothing meaningful.
- **`never`** — a value that can never occur (e.g., a function that always throws).

```ts
function logIt(value: unknown): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // OK — narrowed to string
  }
}
```

The difference between `any` and `unknown` is the single most important habit in this
block: prefer `unknown` and **prove** the type before you use it.

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/02-basic-types
```

1. `firstAndLast(items)` — take a `string[]` and return a **tuple** `[string, string]`
   of the first and last items.
2. `sumAll(nums)` — sum a `number[]`.
3. `describeValue(value)` — take an `unknown` and return `"string"`, `"number"`,
   `"boolean"`, or `"other"` depending on its runtime type (practice narrowing).
4. `makeReadonly(nums)` — return the same numbers typed as a `readonly number[]`.

Then compare with [`solutions/`](./solutions).
