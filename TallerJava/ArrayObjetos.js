// Crea un array de objetos, donde cada objeto represente a una persona con propiedades como nombre, edad y profesión. Muestra en la consola la profesión de cada persona en el array.
const personas = [
    {
        nombre: "Luz",
        edad: 30,
        profesion: "Ingeniera"
    },

    {
        nombre: "Andrea",
        edad: 25,
        profesion: "Periodista"
    },

    {
        nombre: "Camilo",
        edad: 23,
        profesion: "Economista"
    },
];

personas.forEach(personas => console.log(personas.profesion));
