// Solicitar al usuario un número y mostrar los números pares menores o iguales a ese número
const numero = 12;

for (let i = numero; i >= 0; i -= 2) {
    if (i < 0) {
        break
    } else {
        console.log(i);
    }
}


// Escribe un programa que simule un juego de adivinanzas. Genera un número aleatorio entre 1 y 10 y pide al usuario que lo adivine. Muestra un mensaje indicando si el usuario acertó o no.

let numerodigitado = 6;
let numerorandom = Math.floor(Math.random() * (numerodigitado + 10));

if (numerodigitado === numerorandom) {
  console.log("Ganaste");
} else {
  console.log("Perdiste");
}
