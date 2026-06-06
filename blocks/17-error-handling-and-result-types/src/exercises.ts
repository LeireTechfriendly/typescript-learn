// Block 17 — Exercises
// Run tests:  npx vitest blocks/17-error-handling-and-result-types

export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

// 1. Parse JSON without throwing: success -> { ok: true, value }, failure ->
//    { ok: false, error } where error is an Error.
export function tryParse(json: string): Result<unknown> {
  void json; // remove this line once you use the parameter
  // TODO: try JSON.parse; on catch, return an Error result
  throw new Error("Not implemented");
}

// 2. Divide without throwing: b === 0 -> error result "division by zero".
export function divide(a: number, b: number): Result<number, string> {
  void a;
  void b; // remove these lines once you use the parameters
  // TODO: return a Result<number, string>
  throw new Error("Not implemented");
}

// 3. Turn an unknown caught error into a readable message.
export function getErrorMessage(error: unknown): string {
  void error; // remove this line once you use the parameter
  // TODO: Error -> .message, string -> itself, else "unknown error"
  throw new Error("Not implemented");
}
