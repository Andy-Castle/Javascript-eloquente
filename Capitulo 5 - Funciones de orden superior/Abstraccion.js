for (let i = 0; i < 10; i++) {
  console.log(i);
}

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repetir(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repetir(3, console.log);

let etiquetas = [];
repetir(5, (i) => {
  etiquetas.push(`Unidad ${i + 1}`);
});

console.log(etiquetas);

//FUNCIONES DE ORDEN SUPERIOIR

function mayorQue(n) {
  return (m) => m > n;
}

let mayorQue10 = mayorQue(10);
console.log(mayorQue10(11));

//Funciones que modifican a otras funciones

function ruidosa(f) {
  return (...args) => {
    console.log("llamando con", args);
    let resultado = f(...args);
    console.log("llamado con", args, ", devolvió", resultado);
    return resultado;
  };
}

ruidosa(Math.min)(3, 2, 1);

//funciones con nuevos flujos de control

function aMenosQue(prueba, entonces) {
  if (!prueba) entonces();
}

repetir(3, (n) => {
  aMenosQue(n % 2 == 1, () => {
    console.log(n, "es par");
  });
});

["A", "B"].forEach((l) => console.log(l));
