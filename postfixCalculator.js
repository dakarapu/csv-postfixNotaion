const postFixNotation = expr => {
  //expr = "3 11 + 3 11 +";
  //console.log("EXP to POSTFIX NOTATION FUNCTION: ", expr);
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

  let result = Number(st.pop());

  if (result === NaN) {
    //console.log("EXP to POSTFIX NOTATION FUNCTION: ", expr);
    return "#ERR";
  } else {
    return result;
  }
};

export default postFixNotation;
