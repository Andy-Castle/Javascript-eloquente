function parseINI(string) {
  // Comenzar con un objeto para contener los campos de nivel superior
  let result = {};
  let section = result;
  for (let line of string.split(/\r?\n/)) {
    let match;
    if ((match = line.match(/^(\w+)=(.*)$/))) {
      section[match[1]] = match[2];
    } else if ((match = line.match(/^\[(.*)\]$/))) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;|$)/.test(line)) {
      throw new Error("La línea '" + line + "' no es válida.");
    }
  }
  return result;
}

console.log(
  parseINI(`
  name=Vasilis
  [address]
  city=Tessaloniki`)
);
// → {name: "Vasilis", address: {city: "Tessaloniki"}}
