let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}
console.log(biggest);

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(
  Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
);

console.log(
  Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
);

let total = 0,
  count = 0;

for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}

console.log(Math.round(total / count));
