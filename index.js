import readline from "readline";
import { mapping, evaluateExpression } from "./mapper";
import { readFile, writeFile } from "./files";
import postFixNotation from "./postfixCalculator";

//console.log("Column Json file: ", columnsValues["a"]);

const test = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

test.question("Are you testing this application?", async res => {
  const readData = await readFile(res);
  const list = await postfixNotation(readData);
  const mappedList = await mapping(list);

  evaluateExpression(mappedList);
  //console.log(`########: ${await postfixNotation(readData)}`);
  //let writeData = await writeFile("output.csv", readData);
  //console.log(`Data saved to output file: ${writeData.toString()}`);
  console.table(mappedList);
  test.close();
});

const postfixNotation = expression => {
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
