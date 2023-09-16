function arrayIntersection(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !arr3.includes(arr1[i])) {
      arr3.push(arr1[i]);
    }
  }
  return arr3;
}

module.exports = arrayIntersection;
