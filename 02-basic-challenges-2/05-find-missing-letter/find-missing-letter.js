function findMissingLetter(arr) {
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let first = arr[0];
  let NewArray = [];
  let messing = "";
  for (let i = alpha.indexOf(first) - 1; i <= arr.length; i++) {
    NewArray += alpha[i];
  }

  for (let i = 0; i <= NewArray; i++) {
    for (let j = 0; j <= arr; j++) {
      if (arr[j] === NewArray[i]) {
        continue;
      } else {
        messing = arr[j];
      }
    }
  }
  return messing;
}

module.exports = findMissingLetter;
