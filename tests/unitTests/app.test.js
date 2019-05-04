jest.mock("../../src/app"); // this happens automatically with automocking
jest.mock("../../src/helpers/mapper");
jest.mock("../../src/helpers/files");

import "@babel/polyfill";

//import app from "../../src/app";
//import { mapping, trimExpressions } from "../../src/helpers/mapper";
import { readFile, writeFile } from "../../src/helpers/files";

describe("app - Unit Test", () => {
  it("works with async/await", async () => {
    expect.assertions(1);
    const data = await readFile("input.csv");
    expect(data).toBeInstanceOf(Buffer);
  });
});
