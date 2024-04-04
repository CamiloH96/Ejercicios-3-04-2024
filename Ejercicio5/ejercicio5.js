console.log("---- Ejercicio 5 ----");

const velocidad = parseFloat(process.argv[2]);
console.log(`Velocidad dada ${velocidad} por el usuario`)
const hora = parseFloat(process.argv[3]);
console.log(`Velocidad dada ${hora} por el usuario`)
const resp = velocidad / hora;
if(resp >= 40 & resp <= 60){
    console.log(`Conductor Aprueba velocidad = ${resp} `)
}if(resp>60){
    console.log(`Conductor descalificado por ir muy rapido, velocidad = ${resp}`)
}if(resp<40){
    console.log(`Conductor descalificado por ir muy lento, velocidad = ${resp}`)
}else{
}
