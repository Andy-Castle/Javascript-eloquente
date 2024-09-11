function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`El conejo ${this.type} dice '${line}'`);
  }
}

let KillerRabbit = new Rabbit("asesino");

Rabbit.prototype.toString = function () {
  return `un conejo ${this.type}`;
};

console.log(String(KillerRabbit));

Array.prototype.forEach.call(
  {
    length: 2,
    0: "A",
    1: "B",
  },
  (elt) => console.log(elt)
);

