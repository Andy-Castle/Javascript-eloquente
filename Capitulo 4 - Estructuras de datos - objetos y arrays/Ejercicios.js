//LA SUMA DE UN RANGO

// console.log(sum(range(1, 10)));

function range(inicio, final, paso = 1) {
  let array = [];
  let start = inicio;
  if (paso) {
    for (start; start <= final; start += paso) {
      array.push(start);
    }
  }

  if (paso < 0) {
    for (start; start >= final; start += paso) {
      array.push(start);
    }
  }

  return array;
}

let arr = [25, 25, 5];

function sum(el) {
  let sumTotal = 0;
  for (let entry of el) {
    sumTotal += entry;
  }
  return sumTotal;
}

console.log(sum(arr));

console.log(range(5, 2, -1));

console.log(range(1, 10));

//REVISIÓN DE UN ARRAY
