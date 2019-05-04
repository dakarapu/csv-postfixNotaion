//jest.mock("../../src/app"); // this happens automatically with automocking
//jest.mock("../../src/helpers/mapper");
//jest.mock("../../src/helpers/files");

import "@babel/polyfill";

import app from "../../src/app";
//import { mapping, trimExpressions } from "../../src/helpers/mapper";
import { readFile, writeFile } from "../../src/helpers/files";

beforeEach(() => {
  process.argv = ["", "", "input.csv", "output.csv"];
});

describe("app - Unit Test", () => {
  // it("works with async/await", async () => {
  //   expect.assertions(1);
  //   const data = await readFile("input.csv");
  //   expect(data).toBeInstanceOf(Buffer);
  // });

  it("successful app test", async () => {
    await app();
    // try {
    //   const readData = await readFile(__dirname + "/helpers/input.csv");
    //   const list = await trimExpressions(readData);
    //   const mappedList = await mapping(list);
    //   let writeData = "";
    //   //console.log("mappedList", mappedList);
    //   mappedList.forEach(async element => {
    //     writeData += element + "\r\n";
    //   });
    //   let result = await writeFile(
    //     __dirname + "/helpers/output.csv",
    //     writeData
    //   );
    //   console.table(result);
    //   //return result;
    // } catch (e) {
    //   console.error("Received Error response:", e);
    //   process.exit(1);
    // }
  });
});
