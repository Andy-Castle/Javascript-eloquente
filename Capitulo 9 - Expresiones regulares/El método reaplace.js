//Este solo remplaza la primera coincidencia
console.log("papa".replace("p", "m"));
//mapa

// igual que en el caso anterior
console.log("Borobudur".replace(/[ou]/, "a"));
//Barobudur

//Este remplaza todas por a
console.log("Borobudur".replace(/[ou]/g, "a"));
//Barabadar

console.log(
  "Liskov, Barbara\nMcCarthy, John\nMilner, Robin".replace(
    /(\p{L}+), (\p{L}+)/gu,
    "$2 $1"
  )
);
/*
Barbara Liskov
John McCarthy
Robin Milner
*/

let stock = "1 limón, 2 repollos y 101 huevos";
function menosUno(match, cantidad, unidad) {
  cantidad = Number(cantidad) - 1;
  if (cantidad == 1) {
    // solo queda uno, se elimina la 's'
    unidad = unidad.slice(0, unidad.length - 1);
  } else if (cantidad == 0) {
    cantidad = "ningún";
  }
  return cantidad + " " + unidad;
}
console.log(stock.replace(/(\d+) (\p{L}+)/gu, menosUno));
//ningún limón, 1 repollo y 100 huevos
