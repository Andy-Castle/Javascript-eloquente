console.log(/a(?=e)/.exec("braeburn")); //que antes de la "e" haya una "a"

console.log(/a(?! )/.exec("a b")); //que no haya un espacio depues de la "a"
