"use strict";

// Stampa le potenze di 2 fino a 1000;

console.log("Stampa le potenze di 2 fino a 1000");
let pot = 0;
let exp = 0;
while (pot <= 1000) {
  pot = Math.pow(2, exp);
  if (pot <= 1000) {
    console.log(`2 alla ${exp} fa ${pot}`);
  }
  exp++;
}
