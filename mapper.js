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

export const mapping = list => {
  return new Promise((resolve, reject) => {
    console.table(list);
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
    let x = evaluateExpression(list);
    resolve(x);
  });
};

export const evaluateExpression = mappedList => {
  mappedList.map((v, index) => {
    v.map((v1, i) => {
      let check = postFixNotation(v1);
      console.log(`POLISH CALC for ${v1}: `, check);
      v.splice(i, 1, check);
    });
    mappedList.splice(index, 1, "\r\n" + v);
  });
  return mappedList;
};
