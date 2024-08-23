//Haciendo un triangulo con bucles

let asterico = "";
let tamañoTriangulo = 7;

for (let i = 0; asterico.length < tamañoTriangulo; i++) {
  asterico += "*";
  console.log(asterico);
}

//FizzBuzz

let counter = 100;

for (let i = 1; i <= counter; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

//Tablero de ajedrez
let gato = "";
let size = 8;

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      gato += " ";
    } else {
      gato += "#";
    }
  }
  gato += "\n";
}

console.log(gato);
