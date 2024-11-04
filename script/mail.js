"use strict";

const mails = [
  "pippo@mail.it",
  "paperino@mail.it",
  "pluto@mail.it",
  "topolino@mail.it",
];
const mail = prompt("Inserisci la tua mail");
if (mails.includes(mail)) {
  console.log("Utente registrato. Effettua l'accesso.");
} else {
  console.log("Utente non registrato. Non puoi effettuare l'accesso.");
}
