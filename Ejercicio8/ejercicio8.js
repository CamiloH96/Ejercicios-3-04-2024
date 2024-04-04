console.log("---- Ejercicio 8 ----");
const edad = process.argv;
console.log(`Edad dada ${edad[2]}`)
const mensuales = process.argv;
console.log(`Dinero mensual dado ${mensuales[3]}`);

if(edad[2] >= 16 & mensuales[3] >= 1000){
    console.log(`Tiene que tributar`)
}else{
    console.log(`No tiene que tributar`)
}