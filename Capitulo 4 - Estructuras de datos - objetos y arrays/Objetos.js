let dia1 = {
  hombreArdilla: false,
  eventos: ["trabajo", "tocó árbol", "pizza", "correr"],
};

console.log(dia1.hombreArdilla);
console.log(dia1.lobo);
dia1.lobo = false;
console.log(dia1.lobo);

let descripciones = {
  trabajo: "Fui a trabajar",
  "toco árbol": "Tocó un árbol",
};

let unObjeto = { izquierda: 1, derecha: 2 };
console.log(unObjeto.izquierda);

delete unObjeto.izquierda;
console.log(unObjeto.izquierda);

console.log("izquierda" in unObjeto);
console.log("derecha" in unObjeto);

console.log(Object.keys({ x: 0, y: 0, z: 2 }));

let objetoA = { a: 1, b: 2 };
Object.assign(objetoA, { b: 3, c: 4 });
console.log(objetoA);

let diario = [
  {
    eventos: ["trabajo", "tocó árbol", "pizza", "corrió", "televisión"],
    ardilla: false,
  },
  {
    eventos: [
      "trabajo",
      "helado",
      "coliflor",
      "lasaña",
      "tocó árbol",
      "se cepilló los dientes",
    ],
    ardilla: false,
  },
  {
    eventos: ["fin de semana", "ciclismo", "descanso", "cacahuetes", "cerveza"],
    ardilla: true,
  },
];

// console.log(diario[2].ardilla);
