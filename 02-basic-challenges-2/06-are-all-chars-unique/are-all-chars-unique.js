function areAllCharactersUnique(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    count[char] = true;

    if (count[char]) {
      return false;
    }
  }
  return true;
}

module.exports = areAllCharactersUnique;
