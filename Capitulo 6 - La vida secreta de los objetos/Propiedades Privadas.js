class SecretiveObject {
  #getSecret() {
    return "Me comí todas las ciruelas";
  }
  interrogate() {
    let deboDecirlo = this.#getSecret();
    return "nunca";
  }
}

// let nuevo = new SecretiveObject();

// console.log(nuevo.interrogate());

class RandomSource {
  #max;
  constructor(max) {
    this.#max = max;
  }

  getNumber() {
    return Math.floor(Math.random() * this.#max);
  }
}

// let numero = new RandomSource(9);
// console.log(numero.getNumber());
