function puntoAleatorioEnCirculo(radio) {
  let ángulo = Math.random() * 2 * Math.PI;
  return { x: radio * Math.cos(ángulo), y: radio * Math.sin(ángulo) };
}
console.log(puntoAleatorioEnCirculo(2));

console.log(Math.random());

console.log(Math.floor(Math.random() * 10));

Math.ceil(); //Redondea hacia arriba el numero entero mas cercano

Math.round(); //redondea el numero entero mas cercano

Math.abs(); //toma el valor absoluto de un número, niega los valores negativos pero deja los positivos

