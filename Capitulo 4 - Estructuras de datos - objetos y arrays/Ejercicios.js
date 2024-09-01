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

// console.log(sum(arr));

// console.log(range(5, 2, -1));

// console.log(range(1, 10));

//REVISIÓN DE UN ARRAY

let array = ["A", "B", "C"];

function reverseArray(arr) {
  let newArr = [];
  for (const entry of arr) {
    newArr.unshift(entry);
  }
  return newArr;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

let arrayValue = [1, 2, 3, 4, 5];

// console.log(reverseArrayInPlace(arrayValue));

//LISTA

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }

  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

// console.log(arrayToList([10, 20]));

// console.log(listToArray(arrayToList([10, 20, 30])));

// console.log(prepend(10, prepend(20, null)));

// console.log(nth(arrayToList([10, 20, 30]), 1));

//COMPARACIÓN PROFUNDA

function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, { here: 1, object: 2 }));

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
