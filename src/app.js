import "@babel/polyfill";
import { mapping, trimExpressions } from "./helpers/mapper";
import { readFile, writeFile } from "./helpers/files";

const app = async () => {
  try {
    const readData = await readFile(process.argv[2]);
    const list = await trimExpressions(readData);
    console.log(
      "\n******************** Input Received *********************\n"
    );
    console.table(list);
    const mappedList = await mapping(list);
    let writeData = "";
    mappedList.forEach(async element => {
      writeData += element + "\r\n";
    });
    let result = await writeFile(process.argv[3], writeData);
    console.log(
      "\n******************** Final Response *********************\n"
    );
    console.table(result);
    //return result;
  } catch (e) {
    console.error("Received Error response:", e);
    process.exit(1);
  }
};

export default app;
//app();
