const postFixNotation = (array, stack) => {
  if (array.length == 0) {
    if (stack.length == 1) {
      if (!isNaN(stack[0]) || typeof stack[0] == "number") {
        return Number(stack[0]);
      } else {
        return "#ERR";
      }
    } else {
      return "#ERR";
    }
  } else {
    var cc = array[0];
    array.splice(0, 1);

    if (cc == "+") {
      if (stack.length < 2) return "#ERR";

      num1 = stack[0];
      num2 = stack[1];
      result = Number(num2) + Number(num1);

      stack.splice(0, 2);
      stack.splice(0, 0, result);
      return postFixNotation(array, stack);
    } else if (cc == "-") {
      if (stack.length < 2) return "#ERR";

      num1 = stack[0];
      num2 = stack[1];
      result = Number(num2) - Number(num1);

      stack.splice(0, 2);
      stack.splice(0, 0, result);
      return postFixNotation(array, stack);
    } else if (cc == "*") {
      if (stack.length < 2) return "#ERR";

      num1 = stack[0];
      num2 = stack[1];
      result = Number(num2) * Number(num1);

      stack.splice(0, 2);
      stack.splice(0, 0, result);
      return postFixNotation(array, stack);
    } else if (cc == "/") {
      if (stack.length < 2) return "#ERR";

      num1 = stack[0];
      num2 = stack[1];
      result = Number(num2) / Number(num1);

      stack.splice(0, 2);
      stack.splice(0, 0, result);
      return postFixNotation(array, stack);
    } else if (!isNaN(cc)) {
      stack.splice(0, 0, cc);
      return postFixNotation(array, stack);
    } else {
      return "#ERP";
    }
  }
};

export default postFixNotation;
