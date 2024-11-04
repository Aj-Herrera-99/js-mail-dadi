"use strict";

/*
Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è  dispari inseriscilo nell'array
*/

// inizializzazione array vuoto
const array = [];

for (let i = 0; i < 6; i++) {
  let numero = parseFloat(prompt("Numeri inseriti finora: " 
    + i + "\nInserisci un numero"));
  while (isNaN(numero)) {
    numero = parseInt(prompt("Numeri inseriti finora: " 
    + i + "\nNon valido. Inserisci un numero valido."));
  }
  console.log("Hai inserito: " + numero);
  if(numero % 2 !== 0){
    array.push(numero);
  }
}

console.log("I numeri dell'array: " + array);
