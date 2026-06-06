// Block 09 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

export type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "set"; value: number };

export type WithEmail = { email: string };
export type WithPhone = { phone: string };

export function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default: {
      const _exhaustive: never = shape;
      return _exhaustive;
    }
  }
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "set":
      return action.value;
    default: {
      const _exhaustive: never = action;
      return _exhaustive;
    }
  }
}

export function contactMethod(contact: WithEmail | WithPhone): string {
  return "email" in contact ? contact.email : contact.phone;
}

// Notes:
// - Each Shape/Action variant shares a literal discriminant (`kind`/`type`). Switching
//   on it narrows to that exact variant, so `shape.radius` etc. are type-safe.
// - The `never` default proves exhaustiveness: add a variant without a case and the
//   assignment to `never` stops compiling.
// - `value is string` makes isString a type guard — callers narrow `unknown` to string.
// - `"email" in contact` narrows the union by presence of a property.
