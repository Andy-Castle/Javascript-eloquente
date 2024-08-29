function city(objeto) {
  return objeto.address?.city;
}

console.log(city({ address: { city: "Toronto" } }));

console.log(city({ name: "Vera" }));

console.log("string".notAMethod?.());

console.log({}.arrayProp?.[0]);
