//  Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
const numero = 10;
let total = 1;
for (let i = 1; i <= numero; i++) {
  total *= i;
  console.log("🚀 ~ file: factorial-for.js:5 ~ total:", total);
}

function factorial(n) {
  var total = 1;
  for (i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}
console.log(factorial(10));
