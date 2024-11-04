"use strict";

//Calcola la somma e la media dei primi 10 numeri
console.log("Calcola la somma e la media dei primi 10 numeri");
const numeri = 10;
let somma = 0;
let media;
for(let i=1; i<=numeri; i++){
    somma += i;
}
media = somma / numeri;
console.log("La somma dei primi " + numeri + " numeri è: " + somma);
console.log("La media dei primi " + numeri  + "numeri è: " + media);