function square(x) {
  return x * x;
}

console.log(square(4, true, "erizo"));

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));

console.log(minus(10, 5));

function roundTo(n, step = 1) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
}

console.log(roundTo(4.5));
console.log(roundTo(4.5, 2));

console.log("C", "O", 2);
