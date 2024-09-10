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

function ConejoArcaico(type) {
  this.type = type;
}

ConejoArcaico.prototype.speak = function (line) {
  console.log(`El conejo ${this.type} dice '${line}'`);
};

let conejoEstiloAntiguo = new ConejoArcaico("estilo antiguo");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);

console.log(Object.getPrototypeOf(KillerRabbit) == Rabbit.prototype);

class Particle {
  speed = 0;
  constructor(position) {
    this.position = position;
  }
}

let object = new (class {
  getWord() {
    return "hello";
  }
})();

console.log(object.getWord());
