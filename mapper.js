import fs from "fs";
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
        //console.log("This is column index: ", columnIndex);
        let singlevalues = column.split(" ");
        singlevalues.map((v, i) => {
          var regex = /^[a-z]/;
          var found = v.match(regex);
          if (found && found.length > 0) {
            //console.log("singlevalues values: ", found);
            if (flag === columnIndex) {
              columnEXP += postFixNotation(
                list[cellIndex.row][cellIndex.column]
              );
            }
            //console.log("columnEXP values: ", columnEXP);
            //row.splice(columnIndex, 1, list[cellIndex.row][cellIndex.column]);
            row.splice(columnIndex, 1, columnEXP);
          }
        });
      });
    });
    resolve(list);
  });
};

export const evaluateExpression = mappedList => {
  mappedList.map(v => {
    v.map(v1 => {
      //console.log("Expression: ", v1);
      let check = postFixNotation(v1);
      console.log(`POLISH CALC for ${v1}: `, check);
    });
  });
};
