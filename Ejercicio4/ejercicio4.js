console.log("---- Ejercicio 4 ----");

console.log(`---- Viaja en 1-tren, 2-autobus 3-bicibleta o 4-auto ----`);

const resp =process.argv;

console.log(`respuesta ${resp}`)

if(resp[2] == 1 || resp[2] == 2 ){
    console.log("Paga")
}else{
    console.log("No Paga")
}