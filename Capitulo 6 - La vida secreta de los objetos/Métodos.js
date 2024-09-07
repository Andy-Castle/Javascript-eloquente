//Esto es un metodo simple
function speak(line) {
  console.log(`El conejo ${this.type} dice '${line}'`);
}

let conejoBlanco = { type: "blanco", speak };
let conejoHambriento = { type: "hambriento", speak };

conejoBlanco.speak("Oh, mi pelaje y mis bigotes");
conejoHambriento.speak("¿Tienes zanahorias?");

speak.call(conejoBlanco, "Rapido");

let buscador = {
  find(array) {
    return array.some((v) => v == this.value);
  },
  value: 5,
};

console.log(buscador.find([4, 5]));
