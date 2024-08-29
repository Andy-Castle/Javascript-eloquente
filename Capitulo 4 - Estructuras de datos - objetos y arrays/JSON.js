// {
//   "squirrel": false,
//   "events": ["work", "touched tree", "pizza", "running"]
// }

let string = JSON.stringify({ squirrel: false, events: ["weekend"] }); //esto comvierte un valor de javascript y lo convierte en JSON

console.log(string);

console.log(JSON.parse(string).events); // toma la cadena y la convierte en el valor que codifica


