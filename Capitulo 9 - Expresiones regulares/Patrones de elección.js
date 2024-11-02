let animalCount = /\d+ (pig|cow|chicken)s?/; //que la "s" es opcional

console.log(animalCount.test("15 pigs"));

console.log(animalCount.test("15 pugs"));
