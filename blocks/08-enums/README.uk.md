# Блок 08 — Переліки (Enums)

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

`enum` дає набору іменованих констант єдиний тип. У TypeScript є числові й рядкові
переліки — і часто простіше **літеральне об'єднання** є кращим вибором.

## Рядкові переліки (рекомендовані, якщо вже використовуєш enum)

```ts
enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}

const s: OrderStatus = OrderStatus.Shipped;
console.log(s); // "shipped" — читабельно під час виконання
```

Значення рядкових переліків стабільні й самоописові в логах.

## Числові переліки та зворотне відображення

```ts
enum Direction {
  Up,    // 0
  Down,  // 1
}
Direction.Up;        // 0
Direction[0];        // "Up"  — числові переліки мають зворотну мапу (reverse map)
```

Рядкові переліки зворотної мапи **не** мають.

## `const enum`

`const enum` вбудовується (inlined) на етапі компіляції (без об'єкта під час виконання).
Це швидше, але має застереження за інструментів на кшталт `isolatedModules`, тож надавай
перевагу звичайному enum або об'єднанню, якщо немає виміряної причини.

## Вичерпність через `never`

`switch` по кожному члену переліку може довести свою вичерпність: присвой значення `never`
у `default`, і компілятор повідомить про помилку, якщо ти додаси член, який забув обробити.

```ts
function isFinal(status: OrderStatus): boolean {
  switch (status) {
    case OrderStatus.Delivered:
    case OrderStatus.Cancelled:
      return true;
    case OrderStatus.Pending:
    case OrderStatus.Shipped:
      return false;
    default: {
      const _exhaustive: never = status; // ❌ тут, якщо випадок пропущено
      return _exhaustive;
    }
  }
}
```

## Enum проти літерального об'єднання

Часто об'єднання рядкових літералів виконує те саме завдання з меншою кількістю
механіки й без об'єкта під час виконання:

```ts
type Priority = "low" | "medium" | "high";
```

Надавай перевагу **об'єднанню** для простих закритих наборів; бери **enum**, коли потрібен
іменований простір значень або числова/зворотна поведінка відображення.

---

## Вправи

Відкрий [`src/exercises.ts`](./src/exercises.ts), реалізуй кожен `// TODO`, потім запусти:

```bash
npx vitest blocks/08-enums
```

1. `statusLabel(status)` — зіставити кожен `OrderStatus` з людською міткою.
2. `isFinal(status)` — **вичерпний** обробник (з `never` у `default`), що повертає, чи є
   статус кінцевим (`Delivered`/`Cancelled`).
3. `priorityWeight(priority)` — та сама ідея, змодельована як **літеральне об'єднання**
   `Priority` замість enum: `low → 1`, `medium → 2`, `high → 3`.

Потім порівняй з [`solutions/`](./solutions).
