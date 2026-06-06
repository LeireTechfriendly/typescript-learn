# Block 20 — Capstone Project

## Goal
Build a small **typed task-manager library** from scratch, applying everything:
union/discriminated models, generics, narrowing, modules, error handling with
`Result`, and a full passing test suite under `strict`.

## Requirements
- Model a `Task` with a discriminated `status` union.
- A generic in-memory `Store<T>` with add/get/update/remove.
- Functions return `Result<T, E>` instead of throwing on invalid input.
- Split across modules with a clean public API (barrel `index.ts`).
- All tests green, `npm run typecheck` clean.

## Deliverable
Commit the finished project to your fork and write a short README for it.

Run: `npx vitest blocks/20-capstone-project`
