// Crea un programa que declare un array con varios nombres y luego los muestre uno por uno en la consola.

let nombres = ['Alfredo','Angela','Antonella','Roberto','Robinson'];

for (i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
};

// Escribe un programa que pida al usuario cinco números, los guarde en un array y luego muestre el número mayor.

let numeros = [10,420,2,15];

const numeromayor = Math.max(...numeros);
console.log('El número mayor de los valores dados es ' + numeromayor);
