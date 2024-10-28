console.log(/'\d+'/.test("'123'")); //esto quiere decir si hay un digito con comillas simples

console.log(/'\d+'/.test("''")); //aqui sale false porque no lo cumple

console.log(/'\d*'/.test("'123'"));

console.log(/'\d*'/.test("''")); // el asterico permite que coincida con cero veces

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));

/* 
"\d" Cualquier caracter digito
"\w" Un caracter alfanumerico ("caracter de palabra")
"\s" cualquier caracter de espacio en blanco("espacio, tabulación, nueva linea y similares")
"\D" un caraster que noes un digito
"\W" un caracter no alfanumerico
"\S" un caracter qur no es de espacio en blanco
"[\d] cuaquier digito o un caracter de punto"

*/

//Patron
let numrfc = /\w{1}\w{1}\w{1}\w{1}\d{1}\d{1}\d{1}\d{1}\d{1}\d{1}\w{1}\w{1}\d{1}/;
console.log(numrfc.test(""));

let shortnumrfc = /\w{1,4}\d{1,6}\w{1,2}\d{1}/;
console.log(shortnumrfc.test(""));
