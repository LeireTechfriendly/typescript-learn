// Block 18 — Declaration Files & @types: worked examples
// Run me:  npx tsx blocks/18-declaration-files-and-types/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// A .d.ts holds declarations only (no bodies). To type the untyped legacy.js,
// its sibling legacy.d.ts would contain exactly:
//
//   export function shout(message: string): string;
//   export const LANG: string;
//
// Importers then get full types for `import { shout, LANG } from "./legacy"`.

// Below is the same idea inline: an interface "declares" a shape, and a value
// implements it. In a real .d.ts there'd be no implementation at all.
interface Greeter {
  greet(name: string): string;
}

const greeter: Greeter = {
  greet: (name) => `Hello, ${name}!`,
};
console.log(greeter.greet("Ada"));

// To type a whole untyped package by name, you'd write an ambient module:
//   declare module "some-lib" {
//     export function doThing(x: number): string;
//   }
// and to extend a global (sparingly): declare global { interface Window { flag: boolean } }
