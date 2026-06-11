// Block 04 — Exercises
// Run tests:  npx vitest blocks/04-objects-and-type-aliases

// Shared types used by the exercises below.
export type User = { id: number; name: string };

export type Config = {
  host?: string;
  port?: number;
  debug?: boolean;
};

export type Counts = { [word: string]: number };

export type Settings = {
  theme?: "light" | "dark";
  fontSize?: number;
};
// After applying defaults, nothing is optional anymore.
export type ResolvedSettings = {
  theme: "light" | "dark";
  fontSize: number;
};

// 1. Build a User object from the given fields.
export function makeUser(id: number, name: string): User {
  // TODO: return an object matching the User type
  return { id, name };
}

// 2. Merge two configs; values in `override` win over `base`.
export function mergeConfig(base: Config, override: Config): Config {
  // TODO: return a new object with base spread first, then override
  return { ...base, ...override };
}

// 3. Count how many times each word appears, using an index-signature dictionary.
export function wordCount(words: string[]): Counts {
  // TODO: build { word: count } over the array
  const count : Counts = {};
  for(const word of words)
  {
    count[word] = (count[word] ?? 0) + 1;
  }
  return count;
}

// 4. Fill in any missing settings with defaults: theme "light", fontSize 14.
export function withDefaults(settings: Settings): ResolvedSettings {
  // TODO: return a ResolvedSettings with no optional/undefined fields
    return {
    theme: settings.theme ?? "light",
    fontSize: settings.fontSize ?? 14,
  };
}
