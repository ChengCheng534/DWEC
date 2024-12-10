/* Ejercicio 1 [0.5 puntos] */

/* Dado el siguiente texto */

/* [0.5] Mostrar en consola las palabras en minúscula, separadas por comas y al final terminado en punto. */

/*
let poema = `Verde que te quiero verde.
Verde viento. Verdes ramas.
El barco sobre la mar
y el caballo en la montaña.
Con la sombra en la cintura,
ella sueña en su baranda,
verde carne, pelo verde,
con los ojos de fría plata.
Verde que te quiero verde.
Bajo la luna gitana,
las cosas la están mirando
y ella no puede mirarlas.`;

const mostrarPoema = (cadena) => {
    return console.log(poema.split(" ").join().toLocaleLowerCase());
}

mostrarPoema(poema);
*/

// Texto del poema
let poema = `Verde que te quiero verde.
Verde viento. Verdes ramas.
El barco sobre la mar
y el caballo en la montaña.
Con la sombra en la cintura,
ella sueña en su baranda,
verde carne, pelo verde,
con los ojos de fría plata.
Verde que te quiero verde.
Bajo la luna gitana,
las cosas la están mirando
y ella no puede mirarlas.`;

// Función para mostrar las palabras en minúscula separadas por comas
const mostrarPoema = (cadena) => {
  // Quitar puntuación, convertir a minúsculas y dividir en palabras
  const palabras = cadena
    .replace(/[.,]/g, '') // Eliminar puntos y comas
    .toLocaleLowerCase() // Convertir a minúsculas
    .split(/\s+/); // Dividir por espacios o saltos de línea

  // Unir palabras con comas y agregar un punto al final
  const resultado = palabras.join(',') + '.';

  // Mostrar el resultado en consola
  console.log(resultado);
};

// Llamar a la función con el poema
mostrarPoema(poema);
