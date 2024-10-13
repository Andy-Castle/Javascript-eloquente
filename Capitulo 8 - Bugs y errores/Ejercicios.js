//Reintentar
class MultiplicatiorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatiorUnitFailure("Klunk");
  }
}

//Esta es mi selección
// function reliableMultiply(a, b) {
//   let result = a * b;
//   for (;;) {
//     if (Math.random() < 0.2) {
//       if (a * b == result) {
//         return a * b;
//       }
//     }
//     break;
//   }
// }

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatiorUnitFailure)) throw e;
    }
  }
}

// console.log(reliableMultiply(8, 8));

//LA CAJA CERRADA CON LLAVE
const box = new (class {
  locked = true;
  #content = [];

  unlock() {
    this.locked = false;
  }
  lock() {
    this.locked = true;
  }
  get content() {
    if (this.locked) throw new Error("¡Cerrado con llave!");
    return this.#content;
  }
})();

function withBoxUnlocked(body) {
  let locked = box.locked;
  if (locked) box.unlock();
  try {
    return body();
  } finally {
    if (locked) box.lock();
  }
}

withBoxUnlocked(() => {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
