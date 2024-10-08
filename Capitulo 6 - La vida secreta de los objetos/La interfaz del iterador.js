let okIterador = "OK"[Symbol.iterator]();
console.log(okIterador.next()); //"O"
console.log(okIterador.next()); //"K"
console.log(okIterador.next()); //"undefined"

class List {
  constructor(value, rest) {
    this.value = value;
    this.rest = rest;
  }

  get length() {
    return 1 + (this.rest ? this.rest.length : 0);
  }

  static fromArray(array) {
    let result = null;
    for (let i = array.length - 1; i >= 0; i--) {
      result = new this(array[i], result);
    }
    return result;
  }
}

class ListIterator {
  constructor(list) {
    this.list = list;
  }

  next() {
    if (this.list == null) {
      return { done: true };
    }
    let value = this.list.value;
    this.list = this.list.rest;
    return { value, done: false };
  }
}

List.prototype[Symbol.iterator] = function () {
  return new ListIterator(this);
};

let lista = List.fromArray([1, 2, 3]);
for (let elemento of lista) {
  console.log(elemento);
}
/*
1
2
3 */

console.log([..."PCI"]); // [ 'P', 'C', 'I' ]
