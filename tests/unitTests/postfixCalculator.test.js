import postFixNotation from "../../src/postfixCalculator";

describe("postFixNotation - Unit Test", () => {
  it("Successfull parseCellPosition", () => {
    const data = postFixNotation("5  1  2    +    4  *  +   3   -");
    expect(data).toEqual(14);
  });
});
