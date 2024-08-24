function imprimirInventarioGranja(vacas, pollos) {
  let cadenaVaca = String(vacas);
  while (cadenaVaca.length < 3) {
    cadenaVaca = "0" + cadenaVaca;
  }
  console.log(`${cadenaVaca} Vacas`);

  let cadenaPollo = String(pollos);
  while (cadenaPollo.length < 3) {
    cadenaPollo = "0" + cadenaPollo;
  }
  console.log(`${cadenaPollo} Pollos`);
}

// imprimirInventarioGranja(7, 11);

// function imprimirConRellenoYEtiqueta(numero, etiqueta) {
//   let cadenaNumero = String(numero);
//   while (cadenaNumero.length < 3) {
//     cadenaNumero = "0" + cadenaNumero;
//   }
//   console.log(`${cadenaNumero} ${etiqueta}`);
// }

// function imprimirInventarioGranjas(vacas, pollos, cerdos) {
//   imprimirConRellenoYEtiqueta(vacas, "Vacas");
//   imprimirConRellenoYEtiqueta(pollos, "Pollos");
//   imprimirConRellenoYEtiqueta(cerdos, "Cerdos");
// }

// imprimirInventarioGranjas(7, 11, 3);

function rellenarConCeros(numero, ancho) {
  let cadena = String(numero);
  while (cadena.length < ancho) {
    cadena = "0" + cadena;
  }
  return cadena;
}

function imprimirInventarioGranjas(vacas, pollos, cerdos) {
  console.log(`${rellenarConCeros(vacas, 3)} Vacas`);
  console.log(`${rellenarConCeros(pollos, 3)} Pollos`);
  console.log(`${rellenarConCeros(cerdos, 3)} Cerdos`);
}

imprimirInventarioGranjas(7, 16, 3);
