let elNumero = Number(prompt("Elige un numero"));
if (!Number.isNaN(elNumero)) {
  console.log("Tu número es la raíz cuadrada de " + elNumero * elNumero);
} else {
  console.log("Oye. ¿Por que qué no me diste un número?");
}

if (1 + 1 == 2) console.log("Es verdad");

let num = Number(prompt("Escoge un número"));

if (num < 10) {
  console.log("Pequeño");
} else if (num < 100) {
  console.log("Mediano");
} else {
  console.log("Grande");
}
