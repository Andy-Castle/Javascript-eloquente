function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));

function findSolution(objetivo) {
  function find(actual, historial) {
    if (actual === objetivo) {
      return historial;
    } else if (actual > objetivo) {
      return null;
    } else {
      return (
        find(actual + 5, `(${historial} + 5)`) ??
        find(actual * 3, `(${historial} * 3)`)
      );
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
