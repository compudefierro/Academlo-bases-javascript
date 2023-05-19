// recursion concat
function rangeOfNumbersConCat(startNum, endNum) {
  return endNum < startNum
    ? []
    : rangeOfNumbersConCat(startNum, endNum - 1).concat(endNum);
}
//recursion with dots
function rangeOfNumbersThreeDots(startNum, endNum) {
  return endNum < startNum
    ? []
    : [...rangeOfNumbersThreeDots(startNum, endNum - 1), endNum];
}
function countdown(n) {
  console.log(n);
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

// console.log(countdown(10));

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
}
console.log(rangeOfNumbers(2, 2));
console.log(rangeOfNumbers(1, 4));

console.log(
  "🚀 ~ file: countDown.js:33 ~ rangeOfNumbersConCat(2,10):",
  rangeOfNumbersConCat(2, 10)
);

console.log(
  "🚀 ~ file: countDown.js:42 ~ rangeOfNumbersThreeDots(2,6):",
  rangeOfNumbersThreeDots(2, 6)
);
