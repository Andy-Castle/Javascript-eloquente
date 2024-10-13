for (;;) {
  try {
    let dir = promptDirection("¿Donde?"); //error de tipeo
    console.log("Elegiste ", dir);
    break;
  } catch (error) {
    if (error instanceof InputError) {
      console.log("Direccion no valida. Intentalo de nuevo.");
    } else {
      throw error;
    }
  }
}

class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "izquierda") return "I";
  if (result.toLowerCase() == "derecha") return "D";
  throw new InputError("Dirección no válida: " + result);
}
