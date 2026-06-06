# Блок 06 — Інтерфейси

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

`interface` — другий основний спосіб (поряд із `type`) описати форму об'єкта. Він додає
кілька можливостей, яких немає в `type`: ланцюжки `extends` і злиття оголошень
(declaration merging).

## Базовий інтерфейс і розширення

```ts
interface Vehicle {
  wheels: number;
}

interface Car extends Vehicle {
  brand: string;
}

const c: Car = { wheels: 4, brand: "Toyota" }; // має містити ОБИДВА поля
```

Інтерфейс може `extends` один або кілька інших, утворюючи ієрархію.

## Сигнатури виклику (типізація функції інтерфейсом)

Інтерфейс може описувати щось *викликуване*:

```ts
interface Logger {
  (message: string): string; // сигнатура виклику (call signature)
}

const log: Logger = (message) => `[LOG] ${message}`;
```

## Методи-члени та реалізація контракту

```ts
interface Plugin {
  name: string;
  apply(input: number): number;
}

const doubler: Plugin = { name: "doubler", apply: (n) => n * 2 };
```

## Злиття оголошень (declaration merging)

Два оголошення інтерфейсу з однаковим іменем у тій самій області видимості **зливаються**
в одне. (З `type` це неможливо.) Саме так пакети `@types` доповнюють наявні форми:

```ts
interface Profile {
  name: string;
}
interface Profile {
  verified: boolean;
}
// Тепер Profile вимагає ОБИДВА: name і verified.
```

## `interface` проти `type`

- Використовуй **`interface`** для форм об'єктів/класів, які можеш розширювати або які
  доповнюватимуть інші.
- Використовуй **`type`** для об'єднань, кортежів, відображених/умовних типів і
  примітивів — того, що інтерфейс виразити не може.

Обидва типізуються структурно; для простих форм об'єктів вони взаємозамінні.

---

## Вправи

Відкрий [`src/exercises.ts`](./src/exercises.ts), реалізуй кожен `// TODO`, потім запусти:

```bash
npx vitest blocks/06-interfaces
```

1. `makeCar(brand)` — повернути `Car` (який `extends Vehicle`) з `wheels: 4`.
2. `createLogger(prefix)` — повернути `Logger` (сигнатура виклику), що додає `[prefix] `
   на початок повідомлень.
3. `makeAdderPlugin(amount)` — повернути `Plugin`, чий `apply` додає `amount`.
4. `makeProfile(name, verified)` — повернути `Profile`, чиї поля походять із **двох
   злитих оголошень інтерфейсу**.

Потім порівняй з [`solutions/`](./solutions).
