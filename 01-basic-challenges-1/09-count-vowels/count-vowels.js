function countVowels(str) {
  let vouwels = ["a", "e", "i", "u", "o"];
  let newStr = str.toLocaleLowerCase().split("");
  let couunter = 0;
  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < vouwels.length; j++) {
      if (newStr[i] === vouwels[j]) {
        couunter++;
      }
    }
  }
  return couunter;
}

module.exports = countVowels;
