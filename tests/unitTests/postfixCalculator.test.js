import postFixNotation from "../../src/postfixCalculator";

describe("postFixNotation - Unit Test", () => {
  it("Successfull evaluate postfix expression", () => {
    const data = postFixNotation("5  1  2    +    4  *  +   3   -");
    expect(data).toEqual(14);
  });

  it("Error evaluate postfix expression", () => {
    const data = postFixNotation("+");
    expect(data).toEqual("#ERR");
  });
});
