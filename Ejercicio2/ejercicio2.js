console.log("---- Ejercicio 2 ----");

const num = parseFloat(process.argv[2]);

if (num > 0) {
    console.log(`El numero ${num} es positivo`);
} else if (num < 0) {
    console.log(`El numero ${num} es negativo`);
} else {
    console.log("El numero es cero");
}
console.log(num)