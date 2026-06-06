# Блок 09 — Звуження типів (Narrowing)

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

«Звуження» (narrowing) — це те, як TypeScript зводить широкий тип (об'єднання, `unknown`)
до конкретнішого на основі перевірок, які ти пишеш. Це щоденне вміння, що робить
об'єднання безпечними.

## Вбудоване звуження

```ts
function pad(x: string | number) {
  if (typeof x === "number") {
    return " ".repeat(x); // тут x — number
  }
  return x.padStart(4); // тут x — string
}
```

- `typeof` — примітиви (`"string"`, `"number"`, `"boolean"`, …).
- `instanceof` — екземпляри класів.
- `in` — чи має об'єкт певну властивість?
- істинність (`if (x)`) та рівність (`x === "a"`) теж звужують.

## Оператор `in`

Використовуй `in`, щоб розрізняти форми об'єктів за тим, які ключі вони мають:

```ts
type WithEmail = { email: string };
type WithPhone = { phone: string };

function contact(c: WithEmail | WithPhone): string {
  return "email" in c ? c.email : c.phone;
}
```

## Користувацькі охоронці типів (type guards, `x is T`)

Функція, що повертає `value is T`, навчає компілятор звужувати тип у місці виклику:

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

const items: unknown[] = ["a", 1, "b"];
const strings = items.filter(isString); // string[] — звужено охоронцем
```

## Об'єднання з дискримінантом + вичерпність

Дай кожному варіанту спільний літеральний «тег» (*дискримінант*). `switch` по тегу звужує
до кожного варіанта, а `never` у `default` доводить, що ти обробив усі:

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    default: {
      const _exhaustive: never = shape; // ❌ якщо варіант не оброблено
      return _exhaustive;
    }
  }
}
```

---

## Вправи

Відкрий [`src/exercises.ts`](./src/exercises.ts), реалізуй кожен `// TODO`, потім запусти:

```bash
npx vitest blocks/09-narrowing
```

1. `area(shape)` — обчислити площу для **об'єднання з дискримінантом** `Shape` (circle,
   square, rectangle) вичерпно.
2. `isString(value)` — користувацький **охоронець типу** (`value is string`).
3. `reducer(state, action)` — застосувати об'єднання з дискримінантом `Action` до числа,
   з `never` у `default`.
4. `contactMethod(contact)` — використати оператор **`in`**, щоб обрати email чи phone.

Потім порівняй з [`solutions/`](./solutions).
