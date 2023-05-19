function factorial_1(num) {
  if (num < 0) {
    throw new Error("num must not be negative");
  }
  if (num <= 1) {
    // Both 1! and 0! are defined as 1
    return 1;
  }
  return num * factorial(num - 1);
}

// program to find the factorial of a number
function factorial(x) {
  // if number is 0
  if (x == 0) {
    return 1;
  }

  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}

console.log("🚀 ~ file: factorial-recursion.js:26 ~ factorial:", factorial(5));

console.log(
  "🚀 ~ file: factorial-recursion.js:27 ~ factorial_1:",
  factorial_1(5)
);
