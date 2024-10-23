console.log(/[0123456789]/.test("in 1992")); //true
console.log(/[0-9]/.test("in 1992")); //true

/* 
"\d" Cualquier caracter digito
"\w" Un caracter alfanumerico ("caracter de palabra")
"\s" cualquier caracter de espacio en blanco("espacio, tabulación, nueva linea y similares")
"\D" un caraster que noes un digito
"\W" un caracter no alfanumerico
"\S" un caracter qur no es de espacio en blanco
"[\d] cuaquier digito o un caracter de punto"

*/

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:30")); //true
console.log(dateTime.test("30-ene-2003 15:20")); //false

let nonBinary = /[^01]/; //esto loque hace es que no quiere solo 01 repetidos
console.log(nonBinary.test("1100100010100110"));
console.log(nonBinary.test("0111010112101001"));
