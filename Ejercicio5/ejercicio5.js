console.log("---- Ejercicio 5 ----");

const velocidad = process.argv;
console.log(`Velocidad dada ${velocidad[2]} por el usuario`)
const hora = process.argv;
console.log(`Velocidad dada ${hora[3]} por el usuario`)
const resp = velocidad[2] / hora[3];
if(resp >= 40 & resp <= 60){
    console.log(`Conductor Aprueba velocidad = ${resp} `)
}if(resp>60){
    console.log(`Conductor descalificado por ir muy rapido, velocidad = ${resp}`)
}if(resp<40){
    console.log(`Conductor descalificado por ir muy lento, velocidad = ${resp}`)
}else{
}
