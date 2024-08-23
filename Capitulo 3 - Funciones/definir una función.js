const square = function (x) {
  return x * x;
};

console.log(square(12));

const makeNoise = function () {
  console.log("¡Pling!");
};

makeNoise();

const roundTo = function (n, step) {
  let resto = n % step;
  return n - resto + (resto < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));
