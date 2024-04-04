console.log("---- Ejercicio 7 ----");
const nota1 = parseFloat(process.argv[2]);
console.log(`Nota 1° = ${nota1}`);
const nota2 = parseFloat(process.argv[3]);
console.log(`Nota 2° = ${nota2}`);
const nota3 = parseFloat(process.argv[4]);
console.log(`Nota 3° = ${nota3}`);

const suma = nota1+nota2+nota3;
console.log(`Suma de nota = ${suma}`);
const promedio = suma / 3;
if(promedio < 5){
    console.log(`Estudiante Reprobado = ${promedio}`)
}if(promedio > 4 & promedio <= 6){
    console.log(`Estudiante Aprobado = ${promedio}`)
}if(promedio >= 7){
    console.log(`Estudiante Notable = ${promedio}`)
}else{
}