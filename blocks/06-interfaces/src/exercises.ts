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
  // TODO: return an object satisfying Car
  return { wheels: 4, brand: brand };
}

// 2. Return a Logger that prepends "[prefix] " to each message.
export function createLogger(prefix: string): Logger {
  // TODO: return a function (message) => `[${prefix}] ${message}`
  return (message) => `[${prefix}] ${message}`;
}

// 3. Return a Plugin named `add-<amount>` whose apply adds `amount` to its input.
export function makeAdderPlugin(amount: number): Plugin {
  // TODO: return { name, apply }
  return {
    name: `add-${amount}`,
    apply: (value) => value + amount,
  };
}

// 4. Return a Profile (built from the two merged declarations above).
export function makeProfile(name: string, verified: boolean): Profile {
  // TODO: return an object with both merged fields
  return { name: name, verified: verified };
}
