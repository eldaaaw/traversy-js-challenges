function titleCase(str) {
  let newStr = str.toLocaleLowerCase().split(" ");
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i][0].toLocaleUpperCase() + newStr[i].slice(1);
  }
  return newStr.join(" ");
}

module.exports = titleCase;
