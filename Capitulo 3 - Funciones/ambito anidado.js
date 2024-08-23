const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "lata", "garbanzos");
  ingredient(0.25, "taza", "tahini");
  ingredient(1, "diente", "ajo");
  ingredient(2, "cucharada", "aceite de oliva");
  ingredient(0.5, "cucharadita", "comino");
};

console.log(hummus(2));
