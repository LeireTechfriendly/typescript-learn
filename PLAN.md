# 📅 The 4-Week Plan

**English** · [Українська](./PLAN.uk.md)

**Goal:** Become comfortable writing real, idiomatic, strictly-typed TypeScript.
**Assumptions:** You know basic JavaScript (variables, functions, arrays, objects, `if`/`for`, arrow functions, promises at a surface level). You can dedicate **3–4 hours per day**, ~5 study days per week.

**Pace:** One block per study day. Each block is sized for ~3 hours: roughly **45–60 min reading** the README + examples, **90–120 min** on exercises, **15–30 min** reviewing solutions and committing your work. Weeks have a built-in slack day for review or catch-up.

**How to measure progress:** A block is "done" when (1) all its tests pass and (2) `npm run typecheck` reports no errors. Commit after every block.

---

## Week 1 — Foundations
*From "JS with annotations" to thinking in types.*

### Block 01 — Getting Started
- What TypeScript is, why it exists, how compilation works (TS → JS).
- The `tsc` compiler, `tsconfig.json`, and running TS with `tsx`.
- Type inference vs. explicit annotations; your first typed function.
- **Exercises:** annotate variables, fix compiler errors, write a typed greeting function.

### Block 02 — Basic Types
- `string`, `number`, `boolean`, `null`, `undefined`.
- Arrays (`number[]`, `Array<string>`), tuples, `readonly` arrays.
- `any` vs `unknown` vs `never`; `void`.
- **Exercises:** type a shopping list, a coordinate tuple, safely handle `unknown` input.

### Block 03 — Functions
- Parameter & return type annotations; optional and default parameters.
- Rest parameters; function type expressions; call signatures.
- `void` returns and the contextual typing of callbacks.
- **Exercises:** typed `sum`, `clamp`, a higher-order `mapArray`, a callback-based filter.

### Block 04 — Objects & Type Aliases
- Object type literals; optional (`?`) and `readonly` properties.
- `type` aliases; intersections (`&`); nested object types.
- Index signatures (`{ [key: string]: number }`).
- **Exercises:** model a `User`, merge config objects, build a typed dictionary.

### Block 05 — Union & Literal Types
- Union types (`string | number`), literal types (`"GET" | "POST"`).
- Combining literals + unions for finite states; `as const`.
- Intro to narrowing a union before use.
- **Exercises:** model a traffic light, an HTTP method router, a `Result` shape.

**Week 1 review day:** redo any failing tests; re-read blocks 02 and 05.

---

## Week 2 — Shaping Types
*Structuring data and behavior.*

### Block 06 — Interfaces
- `interface` syntax; extending interfaces; declaration merging.
- `interface` vs `type` — when to use which.
- Describing function and indexable types with interfaces.
- **Exercises:** define and extend a `Vehicle` hierarchy, type a plugin interface.

### Block 07 — Classes
- Fields, constructors, methods; `public`/`private`/`protected`/`readonly`.
- Parameter properties shorthand; getters/setters.
- `abstract` classes, `implements`, inheritance with `super`.
- **Exercises:** build a `BankAccount`, an abstract `Shape` with area subclasses.

### Block 08 — Enums
- Numeric & string enums; `const enum`; when to prefer union literals instead.
- Reverse mappings; enums as function parameters.
- **Exercises:** model order statuses, convert an enum-based switch.

### Block 09 — Narrowing
- `typeof`, `instanceof`, `in`, truthiness, equality narrowing.
- User-defined type guards (`x is Foo`); discriminated unions.
- Exhaustiveness checking with `never`.
- **Exercises:** narrow a `Shape` union, write a `isString` guard, exhaustive reducer.

### Block 10 — Type Assertions & Casting
- `as` assertions, `as const`, non-null assertion (`!`), double assertions.
- When assertions are safe vs. dangerous; satisfies operator.
- **Exercises:** safely parse JSON, use `satisfies` for config validation.

**Week 2 review day:** combine classes + narrowing in a mini "shape calculator".

---

## Week 3 — Advanced Core
*The features that make TypeScript powerful.*

### Block 11 — Generics
- Generic functions, interfaces, classes; type parameter inference.
- Constraints (`extends`), default type parameters, multiple type params.
- **Exercises:** generic `identity`, `first`, `Stack<T>`, constrained `pluck`.

### Block 12 — Utility Types
- `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`.
- `ReturnType`, `Parameters`, `Awaited`, `NonNullable`.
- **Exercises:** build update payloads with `Partial`, a typed lookup with `Record`.

### Block 13 — keyof, typeof & Indexed Access
- `keyof`, `typeof` (type position), indexed access types (`T[K]`).
- Combining them for type-safe property getters.
- **Exercises:** a type-safe `getProperty`, derive types from a runtime object.

### Block 14 — Mapped & Conditional Types
- Mapped types (`{ [K in keyof T]: ... }`), modifiers (`-?`, `-readonly`).
- Conditional types (`T extends U ? X : Y`), `infer`.
- **Exercises:** write your own `MyPartial`, `MyReadonly`, a `Flatten<T>`.

### Block 15 — Modules
- ES modules: `import`/`export`, default vs named, re-exports.
- Type-only imports (`import type`); module resolution basics.
- **Exercises:** split a small app across modules with correct typed imports.

**Week 3 review day:** rebuild a utility type from scratch without looking.

---

## Week 4 — Practical TypeScript
*Writing real-world code and shipping it.*

### Block 16 — Async & Promises
- Typing `Promise<T>`, `async`/`await`, `Awaited<T>`.
- Typing fetch-like functions and error paths.
- **Exercises:** type an async data loader, sequence and parallelize typed promises.

### Block 17 — Error Handling & Result Types
- `try/catch` with `unknown` errors; custom error classes.
- The `Result<T, E>` pattern as a typed alternative to throwing.
- **Exercises:** implement `tryParse`, a `Result`-returning divide, error narrowing.

### Block 18 — Declaration Files & @types
- What `.d.ts` files are; using `@types/*` packages.
- Writing ambient declarations; typing untyped JS.
- **Exercises:** write a `.d.ts` for a small JS module, augment a global.

### Block 19 — tsconfig & strict mode
- Key compiler options: `strict`, `noUncheckedIndexedAccess`, `noImplicitAny`, paths, target/module.
- Reading and fixing real strictness errors.
- **Exercises:** tighten a loose config and fix the errors it surfaces.

### Block 20 — Capstone Project
- Build a small **typed task-manager / CLI-style library** from scratch using everything learned: union models, generics, narrowing, modules, error handling, and a full passing test suite.
- **Deliverable:** all tests green, zero type errors, committed to your fork.

**Week 4 review day:** polish the capstone, write a short README for it, push to GitHub.

---

## After the month
You'll be ready for: TypeScript with React/Node, advanced generics, the [type-challenges](https://github.com/type-challenges/type-challenges) repo, and contributing types to real projects. Keep `strict` on, always.
