console.log("---- Ejercicio 3 ----");

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

if( num1 > num2){
    rest=(num1)-(num2);
    console.log(`la resta de ${num1} menos ${num2} es ${rest}`);
}else{
    rest=(num2)-(num1);
    console.log(`la resta de ${num2} menos ${num1} es ${rest}`);
}