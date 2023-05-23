"use strict";
function wait(message) {
  setTimeout(function timer() {
    console.log(message);
  }, 1000);
}
wait("Hello, closure!");

for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

// Cloruse & call module or revealing module
function CoolModule() {
  let something = "cool";
  let another = [1, 2, 3];
  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(another.join(" ! "));
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
}
let foo1 = CoolModule();
foo1.doSomething(); // cool
foo1.doAnother(); // 1 ! 2 ! 3
