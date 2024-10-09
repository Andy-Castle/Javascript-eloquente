function test(label, body) {
  if (!body()) console.log(`Fallo: ${label}`);
}

test("convertir texto latino a mayúsculas", () => {
  return "hello".toUpperCase() == "HELLO";
});

test("convertir texto griego a mayúsculas", () => {
  return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});

test("no convertir caracteres sin caso", () => {
  return "ڑغ׍৹৫".toUpperCase() == "ڑغ׍৹৫";
});
