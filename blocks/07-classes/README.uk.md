# Блок 07 — Класи

[English](./README.md) · **Українська**

> ℹ️ Джерело істини — англійська версія ([README.md](./README.md)); український переклад може незначно відставати.

TypeScript додає типи та контроль доступу поверх класів JavaScript.

## Поля, конструктори, модифікатори доступу

```ts
class BankAccount {
  private balance: number; // видиме лише всередині класу

  constructor(initial: number) {
    this.balance = initial;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
}
```

Модифікатори: `public` (за замовчуванням), `private` (лише цей клас), `protected` (цей
клас + підкласи) і `readonly` (присвоюється лише в конструкторі).

## Параметри-властивості (скорочення)

Якщо додати модифікатор до параметра конструктора, поле **оголошується** й
**присвоюється** одним кроком:

```ts
class User {
  constructor(
    public readonly id: number,
    public name: string,
  ) {}
}
// рівнозначно оголошенню полів id/name і присвоєнню їх у тілі
```

## Геттери (getters)

Геттер надає обчислене значення так, ніби це властивість:

```ts
class Temperature {
  constructor(private celsius: number) {}
  get fahrenheit(): number {
    return this.celsius * (9 / 5) + 32;
  }
}
new Temperature(100).fahrenheit; // 212
```

## Абстрактні класи, `extends`, `super`, `implements`

`abstract`-клас не можна інстанціювати; він може оголошувати `abstract`-методи, які
підкласи зобов'язані реалізувати. Підкласи викликають `super(...)`, щоб запустити
конструктор базового класу. `implements` перевіряє клас на відповідність контракту
інтерфейсу.

```ts
interface Identified {
  readonly id: number;
}

abstract class Shape {
  constructor(public readonly kind: string) {}
  abstract area(): number; // кожен підклас надає це
}

class Circle extends Shape {
  constructor(private radius: number) {
    super("circle");
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

---

## Вправи

Відкрий [`src/exercises.ts`](./src/exercises.ts), реалізуй кожен `// TODO`, потім запусти:

```bash
npx vitest blocks/07-classes
```

1. `BankAccount` — `private balance`, `deposit`/`withdraw` з валідацією (без від'ємних
   сум; без овердрафту) і геттер `get balance()`.
2. `Circle` і `Rectangle` — конкретні підкласи наданого абстрактного `Shape`, кожен
   реалізує `area()` і викликає `super(...)`.
3. `User` — реалізує `Identified` через **параметри-властивості**.
4. `Temperature` — геттер `get fahrenheit()` над приватним полем `celsius`.

Потім порівняй з [`solutions/`](./solutions).
