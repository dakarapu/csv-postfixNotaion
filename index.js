import readline from "readline";
import { mapping, trimExpressions } from "./src/helpers/mapper";
import { readFile, writeFile } from "./src/helpers/files";

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
