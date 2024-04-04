console.log("---- Ejercicio 3 ----");

console.log(`---- Viaja en 1-tren, 2-autobus 3-bicibleta o 4-auto ----`);

const resp = 1;
const p =process.argv;
console.log(`respuesta ${resp}`)

if(p[2] == 1 || p[2] == 2 ){
    console.log("Paga")
}else{
    console.log("No Paga")
}