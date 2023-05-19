// Crear un objeto "persona" y mostrar sus propiedades
const persona = {
  nombre: "Camilo",
  edad: 23,
  profesion: "Economista",
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

// Simular un carrito de compras y mostrar el total
const carrito = [
  {
    producto: "Cereal",
    total: 3,
  },
  {
    producto: "Pan",
    total: 5,
  },
  {
    producto: "Carne",
    total: 8,
  },
  {
    producto: "Pollo",
    total: 2,
  }
];


let total = 0;


for (let i = 0; i < carrito.length; i++) {

  total += carrito[i].total;
}

console.log("Total: $" + total);
