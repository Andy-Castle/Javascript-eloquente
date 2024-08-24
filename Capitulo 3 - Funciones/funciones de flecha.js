const roundTo = (n, step) => {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

const exponente1 = (x) => {
  return x * x;
};

const exponente2 = (x) => x * x;

console.log(exponente1(2), exponente2(2));

const cuerno = () => {
  console.log("Toot");
};

cuerno();
