// Ejercicio 4: obteniendo correos de usuarios
// 1.Crear un arreglo con 5 objetos, cada uno de estos objetos debe de tener las propiedades nombre, email y edad, con valores asignados por ti.
let users = [
  {
    nombre: "Matias",
    email: "matias88@gmail.com",
    edad: 39,
  },
  {
    nombre: "Claudio",
    email: "claumo22@hotmail.com",
    edad: 38,
  },
  {
    nombre: "Luciano",
    email: "lucho@gmail.com",
    edad: 23,
  },
  {
    nombre: "Raul",
    email: "rulo@yahooo.com",
    edad: 47,
  },
  {
    nombre: "Juan",
    email: "jager@uol.com",
    edad: 53,
  },
];
// 2. Crear un arreglo de nombre correos y guardar todos los correos que existan en el arreglo del primer paso(debes de acceder a los correos apoyandote en lo aprendido anteriormente).
let correos = [
  users[0].email,
  users[1].email,
  users[2].email,
  users[3].email,
  users[4].email,
];
console.log(correos);

// Bonus: recorrer el arreglo con bucle for y añadir los emails al arreglo arregloCorreos:
let arregloCorreos = [];
for (let i = 0; i < users.length; i++) {
  arregloCorreos.push(users[i].email);
}
console.log(arregloCorreos);
// Visualización del arregloCorreos:
for (let i = 0; i < users.length; i++) {
  console.log(`Usuario: ${users[i].nombre} - Email: ${arregloCorreos[i]}\n`);
}
