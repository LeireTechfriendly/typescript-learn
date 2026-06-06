// Block 17 — Error Handling & Result Types: worked examples
// Run me:  npx tsx blocks/17-error-handling-and-result-types/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// Caught errors are unknown — narrow them.
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "unknown error";
}
try {
  throw new Error("boom");
} catch (e) {
  console.log("message:", getErrorMessage(e));
}

// Custom error class.
class ValidationError extends Error {
  constructor(public field: string) {
    super(`Invalid field: ${field}`);
    this.name = "ValidationError";
  }
}
const ve = new ValidationError("email");
console.log(ve.name, ve.field, "->", getErrorMessage(ve));

// Result<T, E>: failure is part of the return type.
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) return { ok: false, error: "division by zero" };
  return { ok: true, value: a / b };
}

const r = divide(10, 0);
if (r.ok) {
  console.log("value:", r.value);
} else {
  console.log("error:", r.error); // narrowed to the failure branch
}
