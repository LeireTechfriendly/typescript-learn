// Block 11 — Generics: worked examples
// Run me:  npx tsx blocks/11-generics/src/examples.ts
export {}; // make this a module so top-level names don't clash globally

// Generic function — T is inferred from the argument.
function identity<T>(value: T): T {
  return value;
}
console.log(identity(42), identity("hi"));

// Constraint: T must have a length.
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
console.log("longest:", longest([1, 2, 3], [9])); // [1, 2, 3]

// keyof constraint — return type is exactly the property type.
function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { name: "Ada", age: 36 };
console.log("name:", pluck(user, "name")); // string
console.log("age:", pluck(user, "age")); // number

// Generic class.
class Box<T> {
  constructor(private value: T) {}
  get(): T {
    return this.value;
  }
}
console.log("box:", new Box("packed").get());

// Multiple type parameters.
function merge<A, B>(a: A, b: B): A & B {
  return { ...a, ...b };
}
console.log("merged:", merge({ a: 1 }, { b: 2 }));
