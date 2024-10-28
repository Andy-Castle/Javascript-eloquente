// \p{L} Cualquier letra
// \p{N} Cualquier caracter numerico
// \p{P} Cualquier caracter de puntuación
// \p{L} Cualquier no letra (la P en mayuscula invierte)
// \p{Script=Hangul} Cualquier caracter del guion dado

console.log(/\p{L}/u.test("α"));

console.log(/\p{L}/u.test("!"));

console.log(/\p{Script=Greek}/u.test("α"));

console.log(/\p{Script=Arabic}/u.test("α"));
