let edades = {
  Boris: 39,
  Liang: 22,
  Júlia: 62,
};

console.log(`Júlia tiene ${edades["Júlia"]}`);

console.log("Se conoce la edad de Jack?", "Jack" in edades);

console.log("¿Se conoce la edad de toString", "toString" in edades);

console.log("toString" in Object.create(null));

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia tiene ${ages.get("Júlia")}`);

console.log("¿Se conoce la edad de Jack?", ages.has("Jack"));

console.log(ages.has("toString"));

console.log(Object.hasOwn({ x: 1 }, "x"));

console.log(Object.hasOwn({ x: 1 }, "toString"));
