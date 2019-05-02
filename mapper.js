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
        let singlevalues = column.split("");
        singlevalues.map((v, i) => {
          var regex = /^[a-z]/;
          var found = v.match(regex);
          if (found && found.length > 0) {
            let cellIndex = parseCellPosition(column);
            row.splice(columnIndex, 1, list[cellIndex.row][cellIndex.column]);
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
      console.log("Expression: ", v1);
      let check = calc(v1);
      console.log("POLISH CALC: ", check);
    });
  });
};

function calc(expr) {
  if (expr === "" || typeof expr !== "string") {
    return "#ERR";
  }
  var ar = expr.split(/\s+/),
    st = [],
    token;
  while ((token = ar.shift())) {
    if (token == +token) {
      // numeric
      st.push(token);
    } else {
      var n2 = st.pop(),
        n1 = st.pop();
      st.push(eval(n1 + token + " " + n2));
    }
  }
  return Number(st.pop());
}
