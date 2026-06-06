// Block 04 — Reference solutions
// Try the exercises yourself first! Read this only to check your work.

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
export type ResolvedSettings = {
  theme: "light" | "dark";
  fontSize: number;
};

export function makeUser(id: number, name: string): User {
  return { id, name };
}

export function mergeConfig(base: Config, override: Config): Config {
  // Spread base first, then override — later keys win on conflicts.
  return { ...base, ...override };
}

export function wordCount(words: string[]): Counts {
  const counts: Counts = {};
  for (const word of words) {
    // Reading counts[word] is `number | undefined` under noUncheckedIndexedAccess,
    // so default to 0 before incrementing.
    counts[word] = (counts[word] ?? 0) + 1;
  }
  return counts;
}

export function withDefaults(settings: Settings): ResolvedSettings {
  return {
    theme: settings.theme ?? "light",
    fontSize: settings.fontSize ?? 14,
  };
}

// Notes:
// - Object shorthand `{ id, name }` builds the User from same-named variables.
// - `{ ...base, ...override }` is the idiomatic merge; intersection types describe
//   the *type* of a value that has both shapes.
// - An index signature `{ [word: string]: number }` models an open-ended dictionary.
// - `??` (nullish coalescing) supplies defaults only when a value is null/undefined,
//   turning optional Settings into a fully-resolved object.
