import { dayName as nomDeJour } from "./Modulos ES";
let ahora = new Date();

console.log(`Hoy es ${dayName(ahora.getDate())}`);

console.log(nomDeJour(3));

export default ["Invierno", "Primavera", "Verano", "Otoño"];
