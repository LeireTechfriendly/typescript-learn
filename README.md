# TypeScript in a Month 🚀

A hands-on, test-driven course to learn **core TypeScript in ~4 weeks**, assuming you already know basic JavaScript and can study **3–4 hours a day**.

Every topic lives in its own folder under [`blocks/`](./blocks). Each block has:

- **`README.md`** — a clear explanation of the topic with small code samples.
- **`src/examples.ts`** — worked, runnable examples you read and experiment with.
- **`src/exercises.ts`** — practice tasks with `// TODO` stubs for **you** to implement.
- **`tests/exercises.test.ts`** — automated tests (Vitest). Make them pass.
- **`solutions/`** — reference solutions. Try the exercises first, peek only when stuck.

---

## Quick start

```bash
# 1. Clone or fork this repo
git clone <your-fork-url> typescript-in-a-month
cd typescript-in-a-month

# 2. Install dependencies (Node.js 18+ required)
npm install

# 3. Run all tests (most will fail until you solve the exercises)
npm test

# 4. Work on a single block while it re-runs on save
npx vitest blocks/01-getting-started
```

### Recommended workflow per block

1. Read the block's `README.md`.
2. Open `src/examples.ts`, read it, and run it to see the output:
   ```bash
   npx tsx blocks/01-getting-started/src/examples.ts
   ```
3. Open `src/exercises.ts` and implement each `// TODO`.
4. Run that block's tests until they all pass:
   ```bash
   npx vitest blocks/01-getting-started
   ```
5. Compare with `solutions/` and read the explanations there.

---

## Using WebStorm / IntelliJ

This repo works out of the box in WebStorm:

- **Run a file:** right-click `examples.ts` → *Run*. (WebStorm runs `.ts` via its bundled tooling, or install `tsx`.)
- **Run tests:** open any `*.test.ts`, click the green ▶ gutter icon next to a `describe`/`it` block, or right-click the file → *Run 'Vitest'*. WebStorm auto-detects Vitest.
- **Live type checking:** WebStorm shows TypeScript errors inline as you type. The status bar TypeScript widget lets you run a full project check.
- **Auto-run on save:** in the Vitest run configuration, enable *Toggle auto-test* to re-run tests whenever you save.

> Works the same in **VS Code** — install the *Vitest* extension for inline test running, or use the integrated terminal.

---

## Curriculum at a glance

The full day-by-day plan is in **[PLAN.md](./PLAN.md)**. Twenty blocks across four weeks:

| Week | Theme | Blocks |
|------|-------|--------|
| 1 | Foundations | 01 Getting Started · 02 Basic Types · 03 Functions · 04 Objects & Type Aliases · 05 Union & Literal Types |
| 2 | Shaping Types | 06 Interfaces · 07 Classes · 08 Enums · 09 Narrowing · 10 Type Assertions |
| 3 | Advanced Core | 11 Generics · 12 Utility Types · 13 keyof / typeof / Indexed Access · 14 Mapped & Conditional Types · 15 Modules |
| 4 | Practical TS | 16 Async & Promises · 17 Error Handling & Result Types · 18 Declaration Files & @types · 19 tsconfig & strict mode · 20 Capstone Project |

---

## How testing works

Each exercise file exports functions/values. The matching test file imports them and asserts behavior. When you implement a `// TODO` correctly, its test goes green. The goal isn't just passing tests — it's writing code the **compiler** is happy with under `strict` mode.

## Contributing / self-study tips

- Fork the repo so you can commit your solutions and track progress with git.
- Commit after each block (`git commit -m "block 03 done"`) to build a streak.
- Don't skip the READMEs — the exercises assume you read them.
- Stuck for more than ~15 minutes? Read the solution, understand it, then re-implement from memory.

Happy typing! 🧠
