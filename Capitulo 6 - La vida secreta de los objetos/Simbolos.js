let sym = Symbol("nombre");
console.log(sym == Symbol("nombre"));

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`El conejo ${this.type} dice '${line}'`);
  }
}

let KillerRabbit = new Rabbit("asesino");

Rabbit.prototype[sym] = 55;

console.log(KillerRabbit[sym]);

const longitud = Symbol("longitud");
Array.prototype[longitud] = 0;

console.log([1, 2].length);

console.log([1, 2][longitud]);

let miViaje = {
  longitud: 2,
  0: "Lankwitz",
  1: "Babelsbergs",
  [longitud]: 21500,
};

console.log(miViaje[longitud], miViaje.longitud);
