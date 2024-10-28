let coincidencia = /\d+/.exec("uno dos 100");
console.log(coincidencia);
console.log(coincidencia.index);

console.log("uno dos 100".match(/\d+/));

let textoEntreComillas = /'([^']*)'/;
console.log(textoEntreComillas.exec("ella dijo 'hola'"));

console.log(/mal(mente)?/.exec("mal"));

console.log(/(\d)+/.exec("123"));

console.log(/(?:na)+/.exec("banana"));
