"use strict";
var foo = {
  a: 42,
};
// create `bar` and link it to `foo`
var bar = Object.create(foo); // prototype
bar.b = "hello world";
bar.b; // "hello world"
bar.a; // 42 <-- delegated to `foo`
console.log(foo, bar);

let animal = {
  breath: true,
  name: "",
};
let cat = Object.create(animal);
cat.name = "fuffi";
cat.legs = 4;
console.log(animal, cat);
console.log(Object.getPrototypeOf(cat));
