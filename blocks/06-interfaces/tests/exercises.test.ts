import { describe, it, expect, expectTypeOf } from "vitest";
import {
  makeCar,
  createLogger,
  makeAdderPlugin,
  makeProfile,
  type Car,
  type Vehicle,
  type Profile,
} from "../src/exercises";

describe("Block 06 — Interfaces", () => {
  it("makeCar builds a Car that is also a Vehicle", () => {
    expect(makeCar("Toyota")).toEqual({ brand: "Toyota", wheels: 4 });
  });

  it("createLogger prefixes messages", () => {
    const log = createLogger("INFO");
    expect(log("started")).toBe("[INFO] started");
    expect(createLogger("WARN")("careful")).toBe("[WARN] careful");
  });

  it("makeAdderPlugin builds a working Plugin", () => {
    const plugin = makeAdderPlugin(3);
    expect(plugin.name).toBe("add-3");
    expect(plugin.apply(10)).toBe(13);
  });

  it("makeProfile uses the two merged declarations", () => {
    expect(makeProfile("Ada", true)).toEqual({ name: "Ada", verified: true });
  });

  it("has the right types", () => {
    // Car extends Vehicle, so a Car is assignable to Vehicle.
    expectTypeOf<Car>().toMatchTypeOf<Vehicle>();
    // Declaration merging gives Profile both fields.
    expectTypeOf<Profile>().toEqualTypeOf<{ name: string; verified: boolean }>();
  });
});
