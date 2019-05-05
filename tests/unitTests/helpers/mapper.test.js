import {
  trimExpressions,
  parseCellPosition,
  mapping
} from "../../../src/helpers/mapper";

describe("Mapper - Unit Test", () => {
  let exp = "a1";
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

  let buf = Buffer.from(str, "utf8");

  it("Successfull parseCellPosition function", () => {
    const data = parseCellPosition(exp);
    expect(data).toHaveProperty("column");
  });

  it("Successfull mapping function", () => {
    return mapping(map).then(res => {
      expect(res).toHaveLength(5);
    });
  });

  it("should throw error when empty expression string passed", async () => {
    try {
      await mapping([]);
    } catch (e) {
      expect(e).toBe("No data received for mapping");
    }
  });

  it("should throw error when no expression string passed", async () => {
    try {
      await mapping(null);
    } catch (e) {
      expect(e).toBe("No data received for mapping");
    }
  });

  it("should return expected data", () => {
    return trimExpressions(buf).then(res => {
      expect(res.length).toBe(1);
    });
  });

  it("should throw error when no expression string passed", async () => {
    try {
      await trimExpressions(undefined);
    } catch (e) {
      expect(e).toBe("No expression found");
    }
  });

  it("should trow error when no expression string passed", async () => {
    try {
      await trimExpressions(null);
    } catch (e) {
      expect(e).toBe("No expression found");
    }
  });
});
