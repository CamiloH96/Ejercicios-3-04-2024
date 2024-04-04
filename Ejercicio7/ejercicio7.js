console.log("---- Ejercicio 7 ----");
const nota1 = process.argv;
console.log(`Nota 1° = ${nota1[2]}`);
const nota2 = process.argv;
console.log(`Nota 2° = ${nota2[3]}`);
const nota3 = process.argv;
console.log(`Nota 3° = ${nota3[4]}`);

const suma = (+nota1[2])+(+nota2[3])+(+nota3[4]);
console.log(`Suma de nota = ${suma}`);
const promedio = suma / 3;
if(promedio < 5){
    console.log(`Estudiante Reprobado = ${promedio}`)
}if(promedio >= 5 || promedio <= 7){
    console.log(`Estudiante Aprobado = ${promedio}`)
}else{
    console.log(`Estudiante Notable = ${promedio}`)
}