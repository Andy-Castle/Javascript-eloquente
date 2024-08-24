function saludar(quien) {
  console.log("Hola " + quien);
}

saludar("Harry");
console.log("Adios");

function chicken() {
  return egg();
}

function egg() {
  return chicken();
}

console.log(chicken() + " salio primero.");
