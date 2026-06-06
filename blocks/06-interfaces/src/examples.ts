// Block 06 — Interfaces: worked examples
// Run me:  npx tsx blocks/06-interfaces/src/examples.ts

// `export {}` makes this file a module, so the interface names below are scoped
// here and don't merge with global DOM types like `Plugin`.
export {};

// 1. Interface + extends.
interface Vehicle {
  wheels: number;
}
interface Car extends Vehicle {
  brand: string;
}
const car: Car = { wheels: 4, brand: "Toyota" };
console.log("car:", car);

// 2. Call signature — an interface describing a callable.
interface Logger {
  (message: string): string;
}
const log: Logger = (message) => `[LOG] ${message}`;
console.log(log("started"));

// 3. Method member — implementing a contract.
interface Plugin {
  name: string;
  apply(input: number): number;
}
const doubler: Plugin = { name: "doubler", apply: (n) => n * 2 };
console.log(doubler.name, doubler.apply(21));

// 4. Declaration merging — two declarations combine into one.
interface Profile {
  name: string;
}
interface Profile {
  verified: boolean;
}
const profile: Profile = { name: "Ada", verified: true }; // needs BOTH
console.log("profile:", profile);
