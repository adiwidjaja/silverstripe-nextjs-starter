import calcrem from "./calcrem";

describe("Helper calcrem", () => {
  test("with number string 16", () => {
    expect(calcrem("16")).toBe("1rem");
  });
  test("with number 16", () => {
    expect(calcrem(16)).toBe("1rem");
  });
  test("with number 20", () => {
    expect(calcrem(20)).toBe("1.25rem");
  });
  test("with px number 32px", () => {
    expect(calcrem("32px")).toBe("2rem");
  });
  test("with invalid number 48x3", () => {
    expect(calcrem("48x3")).toBe("3rem");
  });
});
