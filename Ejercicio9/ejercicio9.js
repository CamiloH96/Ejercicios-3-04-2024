console.log("---- Ejercicio 9 ----");

const nombre = process.argv[2];
const sexo = process.argv[3];

let grupo;

if ((sexo === 'h' && nombre.toUpperCase().charCodeAt(0) > 'N'.charCodeAt(0)) ||
    (sexo === 'm' && nombre.toUpperCase().charCodeAt(0) < 'M'.charCodeAt(0))) {
  grupo = 'A';
} else {
  grupo = 'B';
}

console.log(`Perteneces al grupo ${grupo}`);