let name = "harry";
let regexp = new RegExp("(^|\\s)" + name + "($|\\s)", "gi");

console.log(regexp.test("Harry es un personaje dudoso"));

name = "dea+hl[]rd";
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
regexp = new RegExp("(^|\\s)" + escaped + "($|\\s)", "gi");
let text = "Este chico dea+hl[]rd es súper molesto.";
console.log(regexp.test(text));
