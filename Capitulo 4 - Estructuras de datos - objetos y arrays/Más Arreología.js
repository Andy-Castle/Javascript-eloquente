let listaDeTareas = [];

function recordar(tarea) {
  listaDeTareas.push(tarea);
}

function obtenerTarea() {
  return listaDeTareas.shift();
}

function recordarUrgente(tarea) {
  listaDeTareas.unshift(tarea);
}

console.log([1, 2, 3, 2, 1].indexOf(2));

console.log([1, 2, 3, 2, 1].lastIndexOf(2));

console.log([0, 1, 2, 3, 4].slice(2, 4));

console.log([0, 1, 2, 3, 4].slice(2));

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
