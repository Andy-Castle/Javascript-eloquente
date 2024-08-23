let x = 10; //global

if (true) {
  let y = 20; //local al bloque
  var z = 30; //tambien global
}

const halve = function (n) {
  return n / 2;
};

let n = 10;

console.log(halve(100));

console.log(n);
