# Блок 04 — Об'єкти та псевдоніми типів

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

Як описати *форму* об'єктів і дати цим формам багаторазові імена.

## Літерали об'єктних типів

Об'єктний тип перелічує кожну властивість і її тип:

```ts
let user: { name: string; age: number } = { name: "Ada", age: 36 };
```

Властивості можуть бути **необов'язковими** через `?` і **незмінними** через `readonly`:

```ts
type Point = {
  readonly x: number; // не можна перепризначити після створення
  readonly y: number;
  label?: string;     // може бути відсутнім — його тип string | undefined
};

const p: Point = { x: 1, y: 2 };
// p.x = 9; // ❌ Не можна присвоїти 'x', бо це властивість лише для читання
```

## Псевдоніми типів (`type`)

`type` дає будь-якому типу багаторазове ім'я — не лише об'єктам:

```ts
type ID = string | number;
type User = { id: ID; name: string };
```

## Перетини типів (intersection, `&`)

`A & B` — це значення, яке задовольняє **обидві** форми; зручно для злиття:

```ts
type WithTimestamps = { createdAt: number; updatedAt: number };
type Post = { title: string } & WithTimestamps;
// Post вимагає title, createdAt ТА updatedAt.
```

## Індексні сигнатури (index signatures)

Коли ключі заздалегідь невідомі, описуй їх узагальнено:

```ts
type Counts = { [word: string]: number };
const wordCount: Counts = {};
wordCount["hello"] = 1; // будь-який рядковий ключ відображається в number
```

> За `noUncheckedIndexedAccess` читання `wordCount["missing"]` має тип
> `number | undefined` — ти мусиш обробити випадок відсутності.

---

## Вправи

Відкрий [`src/exercises.ts`](./src/exercises.ts), реалізуй кожен `// TODO`, потім запусти:

```bash
npx vitest blocks/04-objects-and-type-aliases
```

1. `makeUser(id, name)` — повернути об'єкт `User`, побудований за псевдонімом `type`.
2. `mergeConfig(base, override)` — злити два часткові об'єкти конфігу так, щоб результат
   був дружнім до **перетину**; `override` перемагає у конфліктах.
3. `wordCount(words)` — порахувати входження у словник, типізований **індексною
   сигнатурою** (схожою на `Record`).
4. `withDefaults(settings)` — заповнити відсутні **необов'язкові** властивості значеннями
   за замовчуванням.

Потім порівняй з [`solutions/`](./solutions).
