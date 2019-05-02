import readline from "readline";
import fs from "fs";

const columnsValues = JSON.parse(fs.readFileSync("./column.json").toString());

//console.log("Column Json file: ", columnsValues["a"]);

const test = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

test.question("Are you testing this application?", async res => {
  console.log(`Your input file name: ${res}`);
  let readData = await readFile(res);
  let list = await postfixNotation(readData);
  console.log("This is row 1 and column 1: ", list[0][0]);
  list.map((row, rowIndex) => {
    console.log(`Row No ${rowIndex}: ${row}`);
    row.map((column, columnIndex) => {
      console.log(`Column No ${columnIndex}: ${column}`);
    });
  });
  //console.log(`########: ${await postfixNotation(readData)}`);
  //let writeData = await writeFile("output.csv", readData);
  //console.log(`Data saved to output file: ${writeData.toString()}`);
  test.close();
});

const readFile = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(`${filename}`, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const writeFile = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${filename}`, data, err => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const postfixNotation = expression => {
  return new Promise((resolve, reject) => {
    if (expression) {
      let splitdata = expression.toString().split("\r\n");
      splitdata.map((v, i) => {
        splitdata.splice(i, 1, v.split(","));
        //splitdata.push(v.split(","));
      });

      //console.log(`Split data: ${splitdata}`);

      //resolve(expression.toString());
      resolve(splitdata);
    } else if (!expression || expression === "" || expression === undefined) {
      reject("#ERR");
    }
  });
};

const parseCellPosition = cellPosition => {
  let position = cellPosition.split("");
  return { column: columnsValues[position[0]], row: position[1] };
};
