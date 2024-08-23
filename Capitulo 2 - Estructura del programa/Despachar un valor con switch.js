// if (x == "valor1") accion1();
// else if (x == "valor2") accion2();
// else if (x == "valor3") accion3();
// else accionPredeterminada();

switch (prompt("¿Como esta el clima?")) {
  case "lluvioso":
    console.log("Recuerda llevar un paraguas");
    break;
  case "soleado":
    console.log("Vistete ligero.");
    break;
  case "nublado":
    console.log("Sal al exterior");
    break;

  default:
    console.log("¡Tipo de clima desconocido!");
    break;
}
