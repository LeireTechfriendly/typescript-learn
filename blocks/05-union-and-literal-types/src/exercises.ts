// Block 05 — Exercises
// Run tests:  npx vitest blocks/05-union-and-literal-types

export type Light = "red" | "yellow" | "green";
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// A single source of truth: the runtime tuple AND the derived literal union.
export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;
export type Weekday = (typeof WEEKDAYS)[number]; // "Mon" | ... | "Fri"

// 1. Return the next light in the cycle: red -> green -> yellow -> red.
export function nextLight(current: Light): Light {
  void current; // remove this line once you use the parameter
  // TODO: map each light to the next one in the cycle
  throw new Error("Not implemented");
}

// 2. Map an HTTP method to a verb:
//    GET -> "reading", POST -> "creating", PUT -> "updating", DELETE -> "removing".
export function handle(method: HttpMethod): string {
  void method; // remove this line once you use the parameter
  // TODO: switch over the method literals
  throw new Error("Not implemented");
}

// 3. Normalize a string-or-number id to a string.
export function formatId(id: string | number): string {
  void id; // remove this line once you use the parameter
  // TODO: return the string form (narrow with typeof)
  throw new Error("Not implemented");
}

// 4. Is `day` one of the WEEKDAYS? (Return true/false.)
export function isWeekday(day: string): boolean {
  void day; // remove this line once you use the parameter
  // TODO: check membership against the WEEKDAYS tuple
  throw new Error("Not implemented");
}
