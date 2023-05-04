// Ejercicio 3: creando un objeto
// Crear un objeto de nombre user con las propiedades nombre, apellidos y edad, despues de crear el objeto crear una nueva variable llamada nombreCompleto de tipo string y guardar en esta variable el nombre y el apellido concatenados.

let user = {
  nombre: "Jorge Osvaldo",
  apellido: "Dri",
  edad: 42,
};
let nombreCompleto = user.nombre + " " + user.apellido;
console.log(nombreCompleto);
