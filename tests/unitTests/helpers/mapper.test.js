import {
  trimExpressions,
  parseCellPosition,
  mapping,
  evaluateExpression
} from "../../../src/helpers/mapper";

describe("Mapper - Unit Test", () => {
  let exp = "a1";
  let evaExp = [
    ["3 11 +", "7   2     /", "3 11 +"],
    ["", "", "5  1  2    +    4  *  +   3   -"],
    ["2 3 11 + 5 - *", "7   2     /", "*"],
    ["  7  + -", "10", ""],
    [""]
  ];
  let map = [
    ["3 11 +", "b3", "a1 "],
    ["", "", "5  1  2    +    4  *  +   3   -"],
    ["2 3 11 + 5 - *", "7   2     /", "*"],
    ["  7  + -", "10", ""],
    [""]
  ];

  let str = `3 11 +,b3,a1
  ,,5  1  2    +    4  *  +   3   -
  2 3 11 + 5 - *,7   2     /,*
    7  + -,10,`;

  var buf = Buffer.from(str, "utf8");

  it("Successfull parseCellPosition function", () => {
    const data = parseCellPosition(exp);
    expect(data).toHaveProperty("column");
  });

  it("Successfull evaluateExpression function", () => {
    const data = evaluateExpression(evaExp);
    expect(data.length).toBe(5);
  });

  it("Successfull mapping function", () => {
    return mapping(map).then(res => {
      expect(res).toHaveLength(5);
    });
  });

  it("should return expected data", () => {
    return trimExpressions(buf).then(res => {
      expect(res.length).toBe(1);
    });
  });
});
