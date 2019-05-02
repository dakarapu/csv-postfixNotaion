import readline from "readline";
import { mapping } from "./mapper";
import { readFile, writeFile } from "./files";

const test = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

test.question("Are you testing this application?", async res => {
  console.log("Question response type: ", typeof res);
  try {
    const readData = await readFile(res);
    const list = await trimExpressions(readData);
    const mappedList = await mapping(list);
    let writeData = await writeFile("output.csv", mappedList);
    console.table(writeData);
    test.close();
  } catch (e) {
    console.error("Received Error response:", e);
    process.exit(1);
  }
});

const trimExpressions = expression => {
  return new Promise((resolve, reject) => {
    if (expression) {
      let splitdata = expression.toString().split("\r\n");
      splitdata.map((v, i) => {
        splitdata.splice(i, 1, v.split(","));
      });
      resolve(splitdata);
    } else if (!expression || expression === "" || expression === undefined) {
      reject("#ERR");
    }
  });
};
