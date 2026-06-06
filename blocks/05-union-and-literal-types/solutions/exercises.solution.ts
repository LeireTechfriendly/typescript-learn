// Block 05 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export type Light = "red" | "yellow" | "green";
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;
export type Weekday = (typeof WEEKDAYS)[number];

export function nextLight(current: Light): Light {
  switch (current) {
    case "red":
      return "green";
    case "green":
      return "yellow";
    case "yellow":
      return "red";
  }
}

export function handle(method: HttpMethod): string {
  switch (method) {
    case "GET":
      return "reading";
    case "POST":
      return "creating";
    case "PUT":
      return "updating";
    case "DELETE":
      return "removing";
  }
}

export function formatId(id: string | number): string {
  return typeof id === "number" ? id.toString() : id;
}

export function isWeekday(day: string): boolean {
  // WEEKDAYS is a readonly tuple of literals; widen to readonly string[] to
  // use includes() against an arbitrary string.
  return (WEEKDAYS as readonly string[]).includes(day);
}

// Notes:
// - A `switch` over a literal union is exhaustive: every member is handled, so the
//   function provably returns a Light/string on all paths (no fallthrough needed).
// - `formatId` narrows the union with `typeof` before using the value.
// - `as const` makes WEEKDAYS a readonly tuple, and `(typeof WEEKDAYS)[number]`
//   derives the exact "Mon" | ... | "Fri" union from it.
