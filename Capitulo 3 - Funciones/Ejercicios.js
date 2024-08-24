//Minimo sin usar la función Math
//console.log(Math.min(2, 1));

function min(a, b) {
  return a < b ? a : b;
}

//console.log(min(2, 1));

//Recursión
function isEven(numero) {
  if (numero == 0) return true; //este checha si es cero el numero
  else if (numero == 1) return false; //este checa si el numero es 1
  else if (numero < 0)
    return isEven(-numero); //si es menor a 0 multiplica ese numero por -
  else return isEven(numero - 2); // si no es ninguno de los demas va restando 2 asi hasta llegar a 1 o 0
}

//console.log(isEven(33));

//Contando frijoles
function contarBs(palabra) {
  return contarCaracter(palabra, "B");
}

// console.log(contarBs("BABABA"));

function contarCaracter(palabra, caracter) {
  let contadorDeBs = 0;
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] == caracter) {
      contadorDeBs++;
    }
  }
  return contadorDeBs;
}

console.log(contarBs("BBC"));

console.log(contarCaracter("KaKKerlaK", "K"));
