const postFixNotation = expr => {
  if (expr === "" || typeof expr !== "string") {
    return;
  }
  let arg = expr.split(/\s+/);
  let stArr = [];
  let token;
  while ((token = arg.shift())) {
    if (token == +token) {
      stArr.push(token);
    } else {
      let num2 = stArr.pop();
      let num1 = stArr.pop();
      stArr.push(eval(num1 + token + " " + num2));
    }
  }

  let result = Number(stArr.pop());
  return isNaN(result) ? "#ERR" : result;
};

export default postFixNotation;
