//car y cat
//=> /ca[rt]/;

//pop y prop
//=> /pr?op/

//ferret, ferry y ferrari
// => /ferr(et|y|ari)/

//Cualquier palabra que termine en ious
//=> /ious($|\P{L})/u

//Un carácter de espacio en blanco seguido de un punto, coma, dos puntos o punto y coma
//=> /\s[.,:;]/

//Una palabra con más de seis letras
//=> /\p{L}{7}/u,

//Una palabra sin la letra e (o E)
//=> /(^|\P{L})[^\P{L}e]+($|\P{L})/iu

/* */

let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(^|\P{L})'|'(\P{L}|$)/gu, '$1"$2'));
// → "I'm the cook," he said, "it's my job."

/* */

let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;

for (let str of ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}
