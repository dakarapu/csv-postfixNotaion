import fs from "fs";
import os from "os";
import postFixNotation from "./postfixCalculator";

const columnsValues = JSON.parse(fs.readFileSync("./column.json").toString());

const parseCellPosition = cellPosition => {
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

export const mapping = list => {
  return new Promise((resolve, reject) => {
    list.map((row, rowIndex) => {
      row.map((column, columnIndex) => {
        let cellIndex = parseCellPosition(column);
        let flag = columnIndex;
        let columnEXP = "";
        let singlevalues = column.split(" ");
        singlevalues.map((v, i) => {
          var regex = /^[a-z]/;
          var found = v.match(regex);
          if (found && found.length > 0) {
            if (flag === columnIndex) {
              columnEXP += list[cellIndex.row][cellIndex.column];
            }
            row.splice(columnIndex, 1, columnEXP);
          }
        });
      });
    });
    console.log(
      "******************** Input Evaluated Into PFN *********************"
    );
    console.table(list);
    let res = evaluateExpression(list);
    resolve(res);
  });
};

export const evaluateExpression = mappedList => {
  mappedList.map((v, index) => {
    v.map((v1, i) => {
      let check = postFixNotation(v1);
      v.splice(i, 1, check);
    });
    mappedList.splice(index, 1, "\r\n" + v);
  });
  return mappedList;
};
