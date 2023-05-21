"use strict";

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
for (let i = 0; i < 10; i++) {
  console.log(randomRange(1000, 9999));
}
