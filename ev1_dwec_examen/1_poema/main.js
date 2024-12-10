/* Ejercicio 1 [0.5 puntos] */

/* Dado el siguiente texto */

/* [0.5] Mostrar en consola las palabras en minúscula, separadas por comas y al final terminado en punto. */


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