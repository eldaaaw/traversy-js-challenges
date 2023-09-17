function findMissingNumber(arr) {
  if (arr.length === 0) return 1;

  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return expectedSum - sum;
}

module.exports = findMissingNumber;
