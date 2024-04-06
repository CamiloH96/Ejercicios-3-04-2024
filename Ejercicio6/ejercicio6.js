console.log("---- Ejercicio 6 ----");

const numero_Articulos=parseInt(process.argv[2]);
const precio_Unidad=parseInt(process.argv[3]);
const precio_Total = numero_Articulos * precio_Unidad;

if (numero_Articulos > 10 && precio_Unidad > 40) {
    const descuento=precio_Total * 0.15;
    const total=precio_Total-descuento;
    console.log(`Numero de articulos ${numero_Articulos}, Precio por unidad ${precio_Unidad}`);
    console.log(`Precio sin el descuento, ${precio_Total} - descuento ${descuento}`);
    console.log(`Se aplica el descuento del 15%, la cantidad a pagar es: ${total} euros.`);
}else{
    console.log(`Numero de articulos ${numero_Articulos}, Precio por unidad ${precio_Unidad}`);
    console.log(`No se aplica el descuento, la cantidad a pagar es: ${precio_Total} euros.`);
}