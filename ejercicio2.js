// Ejercicio 2: Sumando los valores de un arreglo

// Crear un array con 3 valores numericos y sumar todos esos valores accedendolos mediante las posiciones.

let arregloNumerico = [38, 43, 47];
let suma = arregloNumerico[0] + arregloNumerico[1] + arregloNumerico[2];
console.log("Suma manual: " + suma);

let totalSumaArreglo = 0;
for (let i = 0; i < arregloNumerico.length; i++) {
  totalSumaArreglo += arregloNumerico[i];
}
console.log(`Suma del arreglo: ${totalSumaArreglo}`);
