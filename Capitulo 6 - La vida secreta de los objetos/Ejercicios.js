//UN TIPO DE VECTOR
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(x) {
    let ObjectX = Object.values(x);

    let newX = this.x + x;
    // let newY = this.y + y;
    return ObjectX;
  }

  minus(x, y) {}
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
