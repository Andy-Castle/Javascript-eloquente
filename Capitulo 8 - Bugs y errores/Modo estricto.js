function canYouSpotTheProblem() {
  "use strict"; //con esto me marca un error
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

// canYouSpotTheProblem();

// function Person(name) {
//   this.name = name;
// }
// let ferdinand = Person("Ferdinand");
// console.log(name);

("use strict");
function Person(name) {
  this.name = name;
}
let ferdinand = Person("Ferdinand");
// → TypeError: Cannot set property 'name' of undefined

/*Resumen de esta lección
no es mala idea usar "use strict" al principio
del programa rara vez duele y ayuda a identifar 
problemas en el programa */