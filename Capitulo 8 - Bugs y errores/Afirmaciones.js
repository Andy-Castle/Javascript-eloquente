function primerElemento(array) {
  if (array.length == 0) {
    throw new Error("primerElemento llamado con []");
  }
  return array[0];
}

console.log(primerElemento([1, 2, 3, 4, 5]));
