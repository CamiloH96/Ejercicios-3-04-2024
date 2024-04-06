console.log("---- Ejercicio 10 ----");

const renta=parseInt(process.argv[2]);

if(renta<=10000){
    console.log(`Su impositivo es del 5% de su renta de ${renta}`);
}if(renta>=10001 & renta<=20000){
    console.log(`Su impositivo es del 15% de su renta de ${renta}`)
}if(renta>=20001 & renta<=35000){
    console.log(`Su impositivo es del 20% de su renta de ${renta}`)
}if(renta>=35001 & renta<=60000){
    console.log(`Su impositivo es del 30% de su renta de ${renta}`)
}if(renta>=60001){
    console.log(`Su impositivo es del 45% de su renta de ${renta}`)
}