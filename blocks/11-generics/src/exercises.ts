// Block 11 — Exercises
// Run tests:  npx vitest blocks/11-generics

// 1a. Return the value unchanged, preserving its type.
export function identity<T>(value: T): T {
  void value; // remove this line once you use the parameter
  // TODO: return value
  throw new Error("Not implemented");
}

// 1b. Return the first item, or undefined for an empty array.
export function first<T>(items: T[]): T | undefined {
  void items; // remove this line once you use the parameter
  // TODO: return items[0]
  throw new Error("Not implemented");
}

// 2. A generic LIFO stack.
export class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    void item; // remove this line once you use the parameter
    // TODO: add item to the top
    throw new Error("Not implemented");
  }

  pop(): T | undefined {
    // TODO: remove and return the top item
    throw new Error("Not implemented");
  }

  peek(): T | undefined {
    // TODO: return the top item without removing it
    throw new Error("Not implemented");
  }

  get size(): number {
    void this.items; // remove this line once you use the field
    // TODO: return the number of items
    throw new Error("Not implemented");
  }
}

// 3. Read a property in a type-safe way; the return type is exactly T[K].
export function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  void obj;
  void key; // remove these lines once you use the parameters
  // TODO: return obj[key]
  throw new Error("Not implemented");
}

// 4. Merge two objects into one of type A & B.
export function merge<A extends object, B extends object>(a: A, b: B): A & B {
  void a;
  void b; // remove these lines once you use the parameters
  // TODO: return { ...a, ...b }
  throw new Error("Not implemented");
}
