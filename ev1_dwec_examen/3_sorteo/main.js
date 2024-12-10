/* Ejercicio 3 [3 puntos] */

/*
Dado un array de arrays numéricos (cartones) y otro array con números (bolasExtraidas)
Se le pedirá al usuario que introduzca el número de cartones con los que quiere jugar.
Comprobar que un los valores cada array (cartones) están en el array (bolasExtraidas).
El cartón premidado debe de poner ¡Premio! al lado
Mostrar por pantalla el número de cartón con los números acertados en verde y los no acertados en rojo
*/

const cartones = [
  [5, 1, 16, 18, 17, 23, 33, 43, 59, 68, 61, 78, 83, 82, 80],
  [1, 2, 16, 28, 36, 43, 42, 56, 50, 64, 65, 79, 75, 70, 86],
  [9, 3, 17, 16, 27, 25, 36, 46, 40, 56, 62, 79, 74, 82, 84],
  [4, 9, 13, 29, 32, 41, 46, 44, 50, 56, 61, 78, 80, 83, 87],
  [6, 12, 24, 36, 43, 47, 42, 58, 50, 52, 63, 73, 72, 77, 86],
  [2, 12, 25, 32, 35, 36, 49, 44, 54, 52, 62, 71, 77, 88, 82],
  [2, 19, 28, 39, 36, 48, 41, 57, 51, 58, 62, 64, 70, 74, 90],
  [8, 13, 18, 15, 28, 27, 39, 31, 49, 59, 69, 67, 74, 78, 82],
  [9, 17, 23, 33, 37, 49, 48, 57, 54, 65, 78, 77, 70, 84, 85],
  [5, 11, 12, 21, 23, 25, 32, 46, 58, 59, 68, 64, 77, 72, 90],
];

const bolasExtraidas = [
  62, 82, 48, 25, 80, 53, 28, 14, 56, 86, 3, 5, 16, 54, 32, 35, 19, 90, 85, 70,
  20, 60, 73, 36, 46, 7, 9, 43, 52, 76, 12, 13, 59, 58, 78, 49, 66, 40, 83, 38,
  69, 1, 26, 24, 31, 61, 47, 79, 21, 37, 11, 42, 75, 15, 74, 68, 39, 89, 45, 57,
  33, 88, 8, 34, 29, 41, 44, 77, 65, 50, 6, 2, 18, 64,
];

/* [0.25] Pedir al usuario el número de cartones */
let pedirCartones = prompt(
  "Por favor, introduzca el número de cartones que desea (Entre 1 y 10)",
  "3"
);
const numeroCartones = parseInt(pedirCartones, 10);

/* [0.25] Validar el número de cartones */
const comprobarCartones = (numero) => {
  if (isNaN(numero) || numero < 1 || numero > 10) {
    alert("Por favor, introduce un número válido entre 1 y 10.");
    return false;
  }
  return true;
};

if (!comprobarCartones(numeroCartones)) {
  throw new Error("Número de cartones no válido. El programa se detendrá.");
}

/* [1.5] Crear una función para verificar si un cartón está premiado */
const esCartonPremiado = (carton, bolas) => {
  return carton.every((numero) => bolas.includes(numero));
};

/* Seleccionar los cartones que jugará el usuario */
const cartonesSeleccionados = cartones.slice(0, numeroCartones);

/* Crear contenedor principal */
const contenedorResultados = document.createElement("div");
document.body.appendChild(contenedorResultados);

/* [0.25] Imprimir las bolas extraídas */
const imprimirBolasExtraidas = () => {
  const tituloBolas = document.createElement("h2");
  tituloBolas.textContent = "Bolas Extraídas:";
  contenedorResultados.appendChild(tituloBolas);

  const parrafoBolas = document.createElement("p");
  parrafoBolas.textContent = bolasExtraidas.join(", ");
  contenedorResultados.appendChild(parrafoBolas);
};

imprimirBolasExtraidas();

/* [0.75] Comprobar si los cartones están premiados y mostrarlos */
const imprimirCartones = () => {
  cartonesSeleccionados.forEach((carton, index) => {
    const premiado = esCartonPremiado(carton, bolasExtraidas);

    // Crear título para cada cartón
    const tituloCarton = document.createElement("h3");
    tituloCarton.textContent = `Cartón ${index + 1} ${
      premiado ? "¡Premio!" : ""
    }`;
    contenedorResultados.appendChild(tituloCarton);

    // Crear el contenido del cartón con números en verde/rojo
    const parrafoCarton = document.createElement("p");
    parrafoCarton.innerHTML = carton
      .map((numero) =>
        bolasExtraidas.includes(numero)
          ? `<span style="color: green;">${numero}</span>` // Número acertado en verde
          : `<span style="color: red;">${numero}</span>` // Número fallado en rojo
      )
      .join(", ");
    contenedorResultados.appendChild(parrafoCarton);
  });
};

imprimirCartones();
