import readline from "readline";
import { mapping, trimExpressions } from "./mapper";
import { readFile, writeFile } from "./files";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  "Please enter your input and output filenames seperated by space: ",
  async res => {
    if (res) {
      const filenames = res.split(" ");
      try {
        const readData = await readFile(filenames[0]);
        const list = await trimExpressions(readData);
        console.log("\n");
        console.log(
          "******************** Input Received *********************"
        );
        console.table(list);
        const mappedList = await mapping(list);
        let writeData = await writeFile(filenames[1], mappedList);
        console.log(
          "******************** Final Response *********************"
        );
        console.table(writeData);
        rl.close();
      } catch (e) {
        console.error("Received Error response:", e);
        process.exit(1);
      }
    }
  }
);

// const trimExpressions = expression => {
//   return new Promise((resolve, reject) => {
//     if (expression) {
//       console.log(`trimexpressions: ${expression}`);
//       let splitdata = expression.toString().split("\r\n");
//       splitdata.map((v, i) => {
//         splitdata.splice(i, 1, v.split(","));
//       });
//       resolve(splitdata);
//     } else if (!expression || expression === "" || expression === undefined) {
//       reject("No expression found");
//     }
//   });
// };
