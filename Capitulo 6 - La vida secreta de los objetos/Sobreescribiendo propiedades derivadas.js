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

Rabbit.prototype.teeth = "pequeñas";

console.log(KillerRabbit.teeth);

KillerRabbit.teeth = "largos, afilados y sangrientos";
console.log(KillerRabbit.teeth);

console.log(new Rabbit("basico").teeth);

console.log(Rabbit.prototype.teeth);

console.log(Array.prototype.toString == Object.prototype.toString);

console.log([1, 2].toString());

console.log(Object.prototype.toString.call([1, 2]));
