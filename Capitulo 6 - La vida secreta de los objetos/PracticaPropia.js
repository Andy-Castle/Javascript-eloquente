//Vamos a practicar Mapas

let genero = {
  Jhon: "Hombre",
  Maria: "Mujer",
  Laura: "Mujer",
  Jaime: "Hombre",
};

console.log(genero["Jhon"]); //Hombre

let gender = new Map();
gender.set("Jhon", "Hombre");
gender.set("Maria", "Mujer");
gender.set("Laura", "Mujer");
gender.set("Jaime", "Hombre");

console.log(gender.get("Jhon")); //Hombre
console.log(gender.get("Laura")); //Mujer

//Esto es de las Clases

class Persona {
  constructor(name) {
    this.name = name;
  }

  Presentation() {
    console.log(`Hola mi nombre es ${this.name}.`);
  }

  Edad(age) {
    console.log(`${this.name} tiene ${age} años.`);
  }

  FavFood(fav) {
    console.log(`La comida favorita de ${this.name} es ${fav}.`);
  }
}

let jaime = new Persona("Jaime");

jaime.Presentation(); //Hola mi nombre es Jaime.
jaime.Edad(27); //Jaime tiene 27 años.
jaime.FavFood("la hamburguesa"); //La comida favorita de Jaime es la hamburguesa.

//Metodos
let tieneLaLetra = {
  hasLetter(word, letter) {
    return word.toLowerCase().includes(letter.toLowerCase());
  },
};

console.log(tieneLaLetra.hasLetter("jaime", "J")); //true

function mascota(pet) {
  console.log(`Esta persona ${this.name} dice que tiene un ${pet}.`);
}

let pedro = { name: "Pedro", mascota };
pedro.mascota("Gato naranja");

//Vamos a practicar Getters, Setters y Estaticos

class Person {
  #edad;
  constructor(edad) {
    this.edad = edad;
  }

  get obtenerEdad() {
    return this.#edad;
  }

  set cambiarEdad(value) {
    if (value >= 0) {
      this.#edad = value;
    } else {
      console.log("Error al introducir edad");
    }
  }

  static esMayorDeEdad(value) {
    return value >= 18;
  }
}

const person1 = new Person(25);

person1.obtenerEdad = 30;

person1.cambiarEdad = -1;

console.log(Person.esMayorDeEdad(20));

//Vamos a ver la herencia

class Animal {
  constructor(name, extremidades) {
    this.name = name;
    this.extremidades = extremidades;
  }

  get Name() {
    return `El nombre del animal es ${this.name}`;
  }

  get Body() {
    return `El animal tiene ${this.extremidades} partes`;
  }
}

let humano = new Animal("Humano", 4);

console.log(humano.Name);
console.log(humano.Body);

class Perro extends Animal {
  #raza;
  constructor(name, extremidades, raza) {
    super(name, extremidades);
    this.#raza = raza;
  }

  get Raza() {
    return `La raza del perro es ${this.#raza}`;
  }
}

let puddle = new Perro("Panchoncito", 4, " Puddle");

console.log(puddle.Name);
console.log(puddle.Body);
console.log(puddle.Raza);

//La interfaz del iterador

let iterador = "Andy"[Symbol.iterator]();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

/*{ value: 'A', done: false }
{ value: 'n', done: false }
{ value: 'd', done: false }
{ value: 'y', done: false }
{ value: undefined, done: true } */

//Simbolos
const altura = Symbol("altura");
Array.prototype[altura] = 0;

let datosFalsos = {
  extremidades: 4,
  0: "Dany",
  1: "Arrioca",
  [altura]: 180,
};

console.log(datosFalsos[altura], datosFalsos.extremidades);

//Prototipos

let gato = {
  speak(line) {
    console.log(`El gato ${this.type} dice '${line}'`);
  },
};

let maki = Object.create(gato);
maki.type = "Carey";
maki.speak("MIAU");

//sobreescribiendo propiedades
class Gato {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`El gato ${this.type} dice '${line}'`);
  }
}

let bella = new Gato("carey");

Gato.prototype.teeth = "Medianas";

console.log(bella.teeth);

bella.teeth = "Pequeños y afilados";

console.log(bella.teeth);

//Polimorfismo

let grey = new Gato("esponjoso");

Gato.prototype.toString = function () {
  return `un gato ${this.type}`;
};

console.log(String(grey));
