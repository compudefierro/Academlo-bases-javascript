"use strict";
// funcion anonima
function imprime() {
  console.log("hola!");
}
let imprime2 = function imprime1() {
  console.log("hola 2");
};

imprime();
imprime2();

// Immediately Invoked Function Expressions (IIFEs)
(function IIFE() {
  console.log("Hola desde IIFE");
})();
let IIFE_var = (function tentito() {
  console.log("Hola desde tentito");
  return "retorno IIFE tentito";
})();

console.log(IIFE_var);

// Closure:
function makeAdder(x) {
  // parameter `x` is an inner variable
  // inner function `add()` uses `x`, so
  // it has a "closure" over it
  function add(y) {
    return y + x;
  }
  return add;
}
let addMe = makeAdder(2);

console.log(addMe(23));

// Funcion que sirve para mostrar los múltiplos de un número
function multiNumber(num1) {
  function plus(num2) {
    return num1 * num2;
  }
  return plus;
}
// TODO: crear nueva funcion para que reciba por parámetro
// el numero a multiplicar
function multiplicar(base) {
  const multi = multiNumber(base);
  let coleccion = [];
  for (let i = 1; i < 11; i++) {
    coleccion.push(multi(i));
  }
  return coleccion;
}
console.log(multiplicar(2));
console.log(multiplicar(10));
