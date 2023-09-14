function calculator(a, b, opreator) {
  //   if (opreator === "+") {
  //     return a + b;
  //   } else if (opreator === "-") {
  //     return a - b;
  //   } else if (opreator === "*") {
  //     return a * b;
  //   } else if (opreator === "/") {
  //     return a / b;
  //   }

  switch (opreator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
  }
}

module.exports = calculator;
