function displayLikes(arr) {
  switch (arr.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return `${arr[0]} likes this`;
      break;
    case 2:
      return `${arr[0]} and ${arr[1]} like this`;
      break;
    case 3:
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
      break;
    default:
      return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
      break;
  }
}

module.exports = displayLikes;
