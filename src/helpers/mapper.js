import fs from "fs";
import "@babel/polyfill";
import postFixNotation from "../postfixCalculator";

const columnsValues = JSON.parse(
  fs.readFileSync(__dirname + "/column.json").toString()
);
const regex = /^[a-z]/;
export const parseCellPosition = cellPosition => {
  let position = cellPosition.split("");
  let column = columnsValues[position[0]];
  let row = position[1] - 1;
  return { column, row };
};

export const trimExpressions = expression => {
  return new Promise((resolve, reject) => {
    if (expression) {
      let splitdata = expression.toString().split("\r\n");
      splitdata.map((v, i) => {
        splitdata.splice(i, 1, v.split(","));
      });
      resolve(splitdata);
    } else if (!expression || expression === "" || expression === undefined) {
      reject("No expression found");
    }
  });
};

export const mapping = wholeSheet => {
  return new Promise((resolve, reject) => {
    if (!wholeSheet && wholeSheet.length < 1) {
      reject("No data received for mapping");
    }
    let counter1 = 0;
    while (counter1 < wholeSheet.length) {
      wholeSheet.forEach(rows => {
        rows.forEach((exp, i) => {
          let counter2 = 0;
          do {
            let result = evaluateExpression(wholeSheet, exp);
            let x = result.replace(/,/g, " ");
            rows[i] = x;
            counter2++;
          } while (counter2 < wholeSheet.length);
        });
      });
      counter1++;
    }

    wholeSheet.forEach((rows, ri) => {
      rows.forEach((exp, i) => {
        rows[i] = postFixNotation(exp);
      });
      wholeSheet[ri] = rows;
    });
    resolve(wholeSheet);
  });
};

function evaluateExpression(wholeSheet, str) {
  let arr1 = str.split(" ");
  let arr2 = [];

  arr1.forEach(e => {
    if (e.match(regex)) {
      let dim = parseCellPosition(e);
      arr2.push(wholeSheet[dim.row][dim.column]);
    } else {
      arr2.push(e);
    }
  });
  return arr2.join();
}
