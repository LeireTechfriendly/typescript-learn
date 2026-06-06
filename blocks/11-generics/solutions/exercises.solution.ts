// Block 11 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

export function identity<T>(value: T): T {
  return value;
}

export function first<T>(items: T[]): T | undefined {
  return items[0];
}

export class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }
}

export function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function merge<A extends object, B extends object>(a: A, b: B): A & B {
  return { ...a, ...b };
}

// Notes:
// - `identity`/`first` infer T from their argument; `first`'s return is `T | undefined`
//   because the array could be empty (and noUncheckedIndexedAccess makes that explicit).
// - `Stack<T>` ties push/pop/peek to the same element type T.
// - `pluck`'s `K extends keyof T` ties the key to the object, so the return is the
//   precise `T[K]` property type — not a widened union.
// - `merge` uses two parameters and returns their intersection.
