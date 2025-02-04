const names = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export function dayName(number) {
  return names[number];
}

export function dayNumber(name) {
  return names.indexOf(name);
}

import nombresEstaciones from "./ImportaciónModulos.js";
