let total = 0,
  count = 1;

while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total);

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

console.log(factorial(8));

//Ya termine la introducción
