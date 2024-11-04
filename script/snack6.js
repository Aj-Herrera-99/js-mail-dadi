"use strict";

/*
Stampa il cubo dei primi N numeri, 
dove N è un numero indicato dall'utente
*/

let n;
do {
  n = Math.floor(parseInt(prompt("Inserisci un numero positivo valido")));
} while (isNaN(n) || n < 0);

for (let i = 0; i <= n; i++) {
  console.log("cubo di " + i + ": " + Math.pow(i, 3));
}
