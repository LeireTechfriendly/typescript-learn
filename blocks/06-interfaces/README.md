# Block 06 — Interfaces

**English** · [Українська](./README.uk.md)

`interface` is the other main way (besides `type`) to describe the shape of an object.
It adds a few capabilities `type` doesn't have: `extends` chains and declaration merging.

## Basic interface & extending

```ts
interface Vehicle {
  wheels: number;
}

interface Car extends Vehicle {
  brand: string;
}

const c: Car = { wheels: 4, brand: "Toyota" }; // must have BOTH fields
```

An interface can `extends` one or more others, building a hierarchy.

## Call signatures (typing a function with an interface)

An interface can describe something *callable*:

```ts
interface Logger {
  (message: string): string; // call signature
}

const log: Logger = (message) => `[LOG] ${message}`;
```

## Method members & implementing a contract

```ts
interface Plugin {
  name: string;
  apply(input: number): number;
}

const doubler: Plugin = { name: "doubler", apply: (n) => n * 2 };
```

## Declaration merging

Two interface declarations with the same name in the same scope **merge** into one.
(This is impossible with `type`.) It's how `@types` packages augment existing shapes:

```ts
interface Profile {
  name: string;
}
interface Profile {
  verified: boolean;
}
// Profile now requires BOTH name and verified.
```

## `interface` vs `type`

- Use **`interface`** for object/class shapes you might extend or have others augment.
- Use **`type`** for unions, tuples, mapped/conditional types, and primitives — things
  an interface can't express.

Both are structurally typed; for plain object shapes they're interchangeable.

---

## Exercises

Open [`src/exercises.ts`](./src/exercises.ts), implement each `// TODO`, then run:

```bash
npx vitest blocks/06-interfaces
```

1. `makeCar(brand)` — return a `Car` (which `extends Vehicle`) with `wheels: 4`.
2. `createLogger(prefix)` — return a `Logger` (call signature) that prepends
   `[prefix] ` to messages.
3. `makeAdderPlugin(amount)` — return a `Plugin` whose `apply` adds `amount`.
4. `makeProfile(name, verified)` — return a `Profile` whose fields come from **two
   merged interface declarations**.

Then compare with [`solutions/`](./solutions).
