// Verifies the reference solution. Run with:  npm run test:solutions
import { describe, it, expect, expectTypeOf } from "vitest";
import {
  makeCar,
  createLogger,
  makeAdderPlugin,
  makeProfile,
  type Car,
  type Vehicle,
  type Profile,
} from "./exercises.solution";

describe("Block 06 — solution", () => {
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
    expectTypeOf<Car>().toMatchTypeOf<Vehicle>();
    expectTypeOf<Profile>().toEqualTypeOf<{ name: string; verified: boolean }>();
  });
});
