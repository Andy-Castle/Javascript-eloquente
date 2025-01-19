let input = "Una cadena con 3 números... 42 y 88.";
let matches = input.matchAll(/\d+/g);
for (let match of matches) {
  console.log("Encontrado", match[0], "en", match.index);
}
