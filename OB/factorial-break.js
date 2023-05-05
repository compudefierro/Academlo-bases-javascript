// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let numero = 10;
let total = 1;
while (true) {
  if (numero > 1) {
    total *= numero;
    numero--;
  } else {
    break;
  }
}
console.log(total);
