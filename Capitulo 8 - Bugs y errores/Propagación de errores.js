// function promptNumder(pregunta) {
//   let resultado = Number(prompt(pregunta));
//   if (Number.isNaN(resultado)) return null;
//   else return resultado;
// }

// console.log(promptNumder("¿Cuántos árboles ves?"));

function lastElemet(arreglo) {
  if (arreglo.length == 0) {
    return { fallo: true };
  } else {
    return { valor: arreglo[arreglo.length - 1] };
  }
}

// console.log(lastElemet([1, 2, 3, 4, 5, 6]));
