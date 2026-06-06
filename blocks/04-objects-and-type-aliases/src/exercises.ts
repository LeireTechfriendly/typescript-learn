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
  void id;
  void name; // remove these lines once you use the parameters
  // TODO: return an object matching the User type
  throw new Error("Not implemented");
}

// 2. Merge two configs; values in `override` win over `base`.
export function mergeConfig(base: Config, override: Config): Config {
  void base;
  void override; // remove these lines once you use the parameters
  // TODO: return a new object with base spread first, then override
  throw new Error("Not implemented");
}

// 3. Count how many times each word appears, using an index-signature dictionary.
export function wordCount(words: string[]): Counts {
  void words; // remove this line once you use the parameter
  // TODO: build { word: count } over the array
  throw new Error("Not implemented");
}

// 4. Fill in any missing settings with defaults: theme "light", fontSize 14.
export function withDefaults(settings: Settings): ResolvedSettings {
  void settings; // remove this line once you use the parameter
  // TODO: return a ResolvedSettings with no optional/undefined fields
  throw new Error("Not implemented");
}
