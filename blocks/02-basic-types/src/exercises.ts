// Block 02 — Exercises
// Run tests:  npx vitest blocks/02-basic-types

// 1. Return a tuple of the first and last element of a non-empty string array.
export function firstAndLast(items: string[]): [string, string] {
  // TODO: return [items[0], items[items.length - 1]] (typed as a tuple)
  return [items[0], items[items.length - 1]] as [string, string];
}

// 2. Sum all numbers in the array.
export function sumAll(nums: number[]): number {
  // TODO: add them up and return the total
  let sum_of_numbers = 0;

  for(const n of nums)
  {
    sum_of_numbers += n;
  }

  return sum_of_numbers;
}

// 3. Narrow an unknown value to describe its runtime type.
//    Return "string" | "number" | "boolean" | "other".
export function describeValue(value: unknown): string {
  // TODO: use typeof checks to return the correct label
  let type = typeof value as string;
  switch(type)
  {
    case 'string':
    {
      return 'string';
    }
    case 'number':
    {
      return 'number';
    }
    case 'boolean':
    {
      return 'boolean';
    }
    default:
    {
      return 'other';
    }
  }
}

// 4. Return the numbers typed as a readonly array.
export function makeReadonly(nums: number[]): readonly number[] {
  // TODO: return nums (the return type already enforces readonly)
  return nums;
}
