//UN TIPO DE VECTOR
// class Vec {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   plus(x) {
//     let ObjectX = Object.values(x);

//     let newX = this.x + x;
//     // let newY = this.y + y;
//     return ObjectX;
//   }

//   minus(x, y) {}
// }

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

/*El primer Vec es del this y el segundo es del other*/
console.log(new Vec(1, 2).plus(new Vec(2, 3)));

console.log(new Vec(1, 2).minus(new Vec(2, 3)));

/*El Vec los this son el 3,4 para el length */
console.log(new Vec(3, 4).length);

/*Esto estaba sencillo, pero no sabia como crear una clase
y yo mismo asignarle los valores, pero ya se como se hace.*/
