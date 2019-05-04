import { readFile, writeFile } from "../../../src/helpers/files";

describe("Files - Unit Test", () => {
  let str = `3 11 +,b3,a1
  ,,5  1  2    +    4  *  +   3   -
  2 3 11 + 5 - *,7   2     /,*
    7  + -,10,`;

  var buf = Buffer.from(str, "utf8");

  var req = [
    "\r\n14,3.5,14",
    "\r\n,,14",
    "\r\n18,3.5,#ERR",
    "\r\n#ERR,10,",
    "\r\n"
  ];
  it("readFile should successfully read input file", () => {
    return readFile("./input.csv").then(res => {
      expect(res).toHaveLength(93);
    });
  });

  it("writeFile should successfully write output file", () => {
    return writeFile("./output.csv", req).then(res => {
      expect(res).toHaveLength(5);
    });
  });

  it("writeFile should throw error for no filename as input", async () => {
    try {
      await writeFile("", req);
    } catch (e) {
      expect(e).toHaveProperty("path", "");
    }
  });
});
