console.log("---- Ejercicio 8 ----");
const edad = parseInt(process.argv[2]);
console.log(`Edad dada ${edad}`)
const mensuales = parseFloat(process.argv[3]);
console.log(`Dinero mensual dado ${mensuales}`);

if(edad >= 16 & mensuales >= 1000){
    console.log(`Tiene que tributar`)
}else{
    console.log(`No tiene que tributar`)
}