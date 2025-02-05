const semana = function () {
  const nombres = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  return {
    nombre(numero) {
      return nombres[numero];
    },
    numero(nombre) {
      return nombres.indexOf(nombre);
    },
  };
};

console.log(semana.nombre(semana.numero("Domingo")));

const ordinal = require("ordinal");
const { days, months } = require("date-names");

exports.formatDate = function (date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, (tag) => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return ordinal(date.getDate());
    if (tag == "dddd") return days[date.getDay()];
  });
};

const { formatDate } = require("./format-date.js");

console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));

//Viernes 13

function require(name) {
  if (!(name in require.cache)) {
    let code = readFile(name);
    let exports = (require.cache[name] = {});
    let wrapper = Function("require, exports", code);
    wrapper(require, exports);
  }
  return require.cache[name];
}
require.cache = Object.create(null);
