"use strict";

function sum(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

console.log("🚀 ~ file: recursion.js:9 ~ sum:", sum([1, 2, 3]));

var suma = function (array) {
  return array.length === 0 ? 0 : array[0] + suma(array.slice(1));
};
console.log("🚀 ~ file: recursion.js:15 ~ suma:", suma([1, 2, 3]));

var sumES6 = (array) =>
  array.length === 0 ? 0 : array[0] + sumES6(array.slice(1));

console.log("🚀 ~ file: recursion.js:18 ~ sumES6([1,2,3]):", sumES6([1, 2, 3]));

console.log(
  "🚀 ~ file: recursion.js:22 ~ [1,2,3].slice():",
  [1, 2, 3].slice(1)
);
