function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Dirección inválida: " + result);
}

function look() {
  if (promptDirection("¿Hacia dónde?") == "L") {
    return "una casa";
  } else {
    return "dos osos enojados";
  }
}

try {
  console.log("Ves", look());
} catch (error) {
  console.log("Algo salió mal: " + error);
}
