// Block 06 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export interface Vehicle {
  wheels: number;
}
export interface Car extends Vehicle {
  brand: string;
}

export interface Logger {
  (message: string): string;
}

export interface Plugin {
  name: string;
  apply(input: number): number;
}

export interface Profile {
  name: string;
}
export interface Profile {
  verified: boolean;
}

export function makeCar(brand: string): Car {
  return { brand, wheels: 4 };
}

export function createLogger(prefix: string): Logger {
  return (message) => `[${prefix}] ${message}`;
}

export function makeAdderPlugin(amount: number): Plugin {
  return {
    name: `add-${amount}`,
    apply: (input) => input + amount,
  };
}

export function makeProfile(name: string, verified: boolean): Profile {
  return { name, verified };
}

// Notes:
// - Car extends Vehicle, so a Car value must satisfy BOTH interfaces.
// - The Logger interface is a call signature: the returned value is a function.
// - `apply`'s `input` is contextually typed by the Plugin interface — no annotation.
// - Profile is declared twice; declaration merging requires makeProfile to provide
//   both `name` and `verified`.
