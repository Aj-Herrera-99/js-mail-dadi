"use strict";

const player = getRndInteger(1, 6);
const bot = getRndInteger(1, 6);
console.log("Dado del player: " + player);
console.log("Dado del bot: " + bot);
if (player === bot) {
  console.log("Non ha vinto nessuno.");
} else if (player > bot) {
  console.log("Il vincitore è player");
} else {
  console.log("Il vincitore è bot");
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
