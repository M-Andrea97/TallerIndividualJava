// Crea un programa que muestre en la consola los números del 1 al 10 utilizando un bucle for.

for (i = 1; i <= 10; i++){
    console.log(i);
}

// Escribe un programa que solicite al usuario un número y luego muestre en la consola todos los números pares desde 1 hasta ese número.

const numero = 20;

for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      console.log(i);
}
}