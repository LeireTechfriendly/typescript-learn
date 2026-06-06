# Блок 02 — Базові типи

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

Огляд примітивних і колекційних типів, якими ти користуватимешся щодня.

## Примітиви

```ts
let title: string = "TypeScript";
let year: number = 2026;       // усі числа — це `number` (без поділу на int/float)
let isFun: boolean = true;
let nothing: null = null;
let missing: undefined = undefined;
```

Їх рідко анотують явно — виведення (inference) справляється саме. Анотуй, коли змінна
оголошена без початкового значення:

```ts
let score: number;   // оголошено, ще не присвоєно
score = 100;
```

## Масиви

Два рівнозначні синтаксиси:

```ts
const nums: number[] = [1, 2, 3];
const names: Array<string> = ["Ada", "Linus"];
```

**`readonly`**-масив не можна змінювати:

```ts
const frozen: readonly number[] = [1, 2, 3];
// frozen.push(4); // ❌ Властивості 'push' немає в readonly-масиві
```

## Кортежі (tuples)

Кортеж — це **масив фіксованої довжини з відомим типом на кожній позиції**:

```ts
let point: [number, number] = [10, 20];
let entry: [string, number] = ["age", 30];
```

Чудово підходить для пар і функцій, що «повертають дві речі».

## `any`, `unknown`, `never`, `void`

- **`any`** — вимикає перевірку типів. Уникай його; він зводить нанівець саму ідею.
- **`unknown`** — *безпечний* `any`. Може містити будь-що, але мусиш **звузити** (narrow)
  його тип (перевірити) перед використанням.
- **`void`** — функція, що не повертає нічого значущого.
- **`never`** — значення, якого не може бути (напр. функція, що завжди кидає виняток).

```ts
function logIt(value: unknown): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // OK — звужено до string
  }
}
```

Різниця між `any` і `unknown` — найважливіша звичка цього блоку: надавай перевагу
`unknown` і **доведи** тип, перш ніж його використати.

---

## Вправи

Відкрий [`src/exercises.ts`](./src/exercises.ts), реалізуй кожен `// TODO`, потім запусти:

```bash
npx vitest blocks/02-basic-types
```

1. `firstAndLast(items)` — взяти `string[]` і повернути **кортеж** `[string, string]` з
   першого й останнього елементів.
2. `sumAll(nums)` — підсумувати `number[]`.
3. `describeValue(value)` — взяти `unknown` і повернути `"string"`, `"number"`,
   `"boolean"` або `"other"` залежно від типу під час виконання (практика звуження).
4. `makeReadonly(nums)` — повернути ті самі числа з типом `readonly number[]`.

Потім порівняй з [`solutions/`](./solutions).
