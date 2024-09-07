let empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);

console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);

console.log(Object.getPrototypeOf([]) == Array.prototype);

let protoRabbit = {
  speak(line) {
    console.log(`El conejo ${this.type} dice '${line}'`);
  },
};

//Solo las propiedades de este objeto individual no se comparten
let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "negro";
blackRabbit.speak("Soy el miedo y la oscuridad");

let orangeRabbit = Object.create(protoRabbit);
orangeRabbit.type = "naranja";
orangeRabbit.speak("Soy una naranja");
