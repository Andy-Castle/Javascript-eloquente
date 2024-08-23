let numero = 0;
while (numero <= 12) {
  console.log(numero);
  numero = numero + 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

let tuNombre;
do {
  tuNombre = prompt("¿Quien eres?");
} while (!tuNombre);
console.log("Hola " + tuNombre);
