// Block 17 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export function tryParse(json: string): Result<unknown> {
  try {
    return { ok: true, value: JSON.parse(json) };
  } catch (error) {
    // JSON.parse throws a SyntaxError; normalize anything to an Error.
    return {
      ok: false,
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }
}

export function divide(a: number, b: number): Result<number, string> {
  if (b === 0) return { ok: false, error: "division by zero" };
  return { ok: true, value: a / b };
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "unknown error";
}

// Notes:
// - tryParse converts an exception into data: callers branch on `ok` instead of
//   wrapping every call in try/catch.
// - Result is a discriminated union on `ok`; in the `ok: true` branch TS knows
//   `value` exists, and in the other branch `error` exists.
// - getErrorMessage narrows the `unknown` catch variable before touching it, which
//   strict mode requires.
