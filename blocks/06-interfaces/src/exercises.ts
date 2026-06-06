// Block 06 — Exercises
// Run tests:  npx vitest blocks/06-interfaces

export interface Vehicle {
  wheels: number;
}
export interface Car extends Vehicle {
  brand: string;
}

export interface Logger {
  (message: string): string; // call signature
}

export interface Plugin {
  name: string;
  apply(input: number): number;
}

// Declaration merging: these two declarations combine into one Profile.
export interface Profile {
  name: string;
}
export interface Profile {
  verified: boolean;
}

// 1. Return a Car with the given brand and wheels: 4.
export function makeCar(brand: string): Car {
  void brand; // remove this line once you use the parameter
  // TODO: return an object satisfying Car
  throw new Error("Not implemented");
}

// 2. Return a Logger that prepends "[prefix] " to each message.
export function createLogger(prefix: string): Logger {
  void prefix; // remove this line once you use the parameter
  // TODO: return a function (message) => `[${prefix}] ${message}`
  throw new Error("Not implemented");
}

// 3. Return a Plugin named `add-<amount>` whose apply adds `amount` to its input.
export function makeAdderPlugin(amount: number): Plugin {
  void amount; // remove this line once you use the parameter
  // TODO: return { name, apply }
  throw new Error("Not implemented");
}

// 4. Return a Profile (built from the two merged declarations above).
export function makeProfile(name: string, verified: boolean): Profile {
  void name;
  void verified; // remove these lines once you use the parameters
  // TODO: return an object with both merged fields
  throw new Error("Not implemented");
}
