console.log("---- Ejercicio 1 ----");

const num = parseFloat(process.argv[2]);

if (num % 2 ==  0){
    console.log(`el numero ${num} es par`);
}else{
    console.log(`el numero ${num} no es par`);
}