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

class LegthList extends List {
  #length;
  constructor(valor, rest) {
    super(valor, rest);
    this.#length = super.length;
  }

  get length() {
    return this.#length;
  }
}

console.log(new LegthList(1, null) instanceof LegthList); //true

console.log(new LegthList(2, null) instanceof List); //true

console.log(new List(3, null) instanceof LegthList); //false

console.log([1] instanceof Array); //true
