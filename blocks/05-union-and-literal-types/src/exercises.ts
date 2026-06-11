// Block 05 — Exercises
// Run tests:  npx vitest blocks/05-union-and-literal-types

export type Light = "red" | "yellow" | "green";
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// A single source of truth: the runtime tuple AND the derived literal union.
export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;
export type Weekday = (typeof WEEKDAYS)[number]; // "Mon" | ... | "Fri"

// 1. Return the next light in the cycle: red -> green -> yellow -> red.
export function nextLight(current: Light): Light {
  // TODO: map each light to the next one in the cycle
  switch(current)
  {
    case 'red':
    {
      return 'green';
    }
    case 'green':
    {
      return 'yellow';
    }
    case 'yellow':
    {
      return 'red';
    }
  }
}

// 2. Map an HTTP method to a verb:
//    GET -> "reading", POST -> "creating", PUT -> "updating", DELETE -> "removing".
export function handle(method: HttpMethod): string {
  // TODO: switch over the method literals
  switch (method)
  {
    case "GET":
      return "reading";
    case "POST":
      return "creating";
    case "PUT":
      return "updating";
    case "DELETE":
      return "removing";
    default:
      throw new Error("Unsupported HTTP method");
  }
}

// 3. Normalize a string-or-number id to a string.
export function formatId(id: string | number): string {
  // TODO: return the string form (narrow with typeof)
  return typeof id === "string" ? id : id.toString();
}

// 4. Is `day` one of the WEEKDAYS? (Return true/false.)
export function isWeekday(day: string): boolean {
  // TODO: check membership against the WEEKDAYS tuple
  return WEEKDAYS.includes(day as (typeof WEEKDAYS)[number]);
}
