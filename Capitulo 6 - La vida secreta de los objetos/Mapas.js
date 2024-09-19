let edades = {
  Boris: 39,
  Liang: 22,
  Júlia: 62,
};

console.log(`Júlia tiene ${edades["Júlia"]}`); //62

console.log("Se conoce la edad de Jack?", "Jack" in edades); //false

console.log("¿Se conoce la edad de toString", "toString" in edades); //true

console.log("toString" in Object.create(null)); //false

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia tiene ${ages.get("Júlia")}`); //62

console.log("¿Se conoce la edad de Jack?", ages.has("Jack")); //false

console.log(ages.has("toString")); //false

console.log(Object.hasOwn({ x: 1 }, "x")); //true

console.log(Object.hasOwn({ x: 1 }, "toString")); //false
