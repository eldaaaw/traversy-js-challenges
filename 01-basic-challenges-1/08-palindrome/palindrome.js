function isPalindrome(str) {
  let newStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  let revStr = "";
  for (i = newStr.length - 1; i >= 0; i--) {
    revStr += newStr[i];
  }
  if (revStr === newStr) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
