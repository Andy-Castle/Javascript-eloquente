console.log(/🍎{3}/.test("🍎🍎🍎"));
//false

console.log(/<.>/.test("<🌹>"));
//false

console.log(/<.>/u.test("<🌹>"));
// true
