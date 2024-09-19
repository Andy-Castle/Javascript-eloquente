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

//Grupos

class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter((v) => v !== value);
  }

  has(value) {
    return this.#members.includes(value);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.#members);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));

console.log(group.has(30));

group.add(10);
group.delete(10);
console.log(group.has(10));

//Esta esta interesante, pero las instrucciones del libro son poco claras
//y tuve que ver la solución para entenderlo

//GRUPOS ITERABLES
class GroupIterator {
  #members;
  #position;

  constructor(members) {
    this.#members = members;
    this.#position = 0;
  }

  next() {
    if (this.#position >= this.#members.length) {
      return { done: true };
    } else {
      let result = { value: this.#members[this.#position], done: false };
      this.#position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

//EXTRA

let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
