function countOccurrences(str, char) {
  return str.split(char).length - 1;
}

module.exports = countOccurrences;

// 2 solutions

// function countOccurrences(str, char) {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         counter++;
//       }
//     }
//     return counter;
//   }
