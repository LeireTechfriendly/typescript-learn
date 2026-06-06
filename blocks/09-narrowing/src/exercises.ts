// Block 09 — Exercises
// Run tests:  npx vitest blocks/09-narrowing

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

// 1. Compute the area of any Shape. Use a switch on `kind` with a `never` default.
export function area(shape: Shape): number {
  void shape; // remove this line once you use the parameter
  // TODO: circle -> π r², square -> size², rectangle -> width*height
  throw new Error("Not implemented");
}

// 2. A user-defined type guard: return value is string.
export function isString(value: unknown): value is string {
  void value; // remove this line once you use the parameter
  // TODO: return whether value is a string (typeof)
  throw new Error("Not implemented");
}

// 3. Apply an Action to the numeric state. Exhaustive, with a `never` default.
//    increment -> state+1, decrement -> state-1, set -> action.value.
export function reducer(state: number, action: Action): number {
  void state;
  void action; // remove these lines once you use the parameters
  // TODO: switch over action.type
  throw new Error("Not implemented");
}

// 4. Return the available contact string, choosing email or phone via `in`.
export function contactMethod(contact: WithEmail | WithPhone): string {
  void contact; // remove this line once you use the parameter
  // TODO: if "email" in contact return the email, else the phone
  throw new Error("Not implemented");
}
