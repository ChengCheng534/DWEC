/* Ejercicio 5 [3 puntos] */

/* Dados los siguientes array de letras, números y caracteres especiales */
const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "Y",
  "Z",
];

const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const caracteresEspeciales = ["!", "#", "$", "&", "@", "_", "-", "(", "=", "?"];

/* Nota: los passwords se mostrarán por consola */

/* [1] Crea una función para generar un password débil:
  - Compuesta por 5 letras y 3 números.
  - Se utilizarán los arrays definidos en el programa principal.
  - Tanto la posición como el valor se obtendrán de forma aleatoria.
*/

/* [1.5] Crea una función para generar un password fuerte: 

  - Compuesta por 6 letras, 4 números y 3 caracteres especiales.
  - Se utilizarán los arrays definidos en el programa principal.
  - Tanto la posición como el valor se obtendrán de forma aleatoria.
  - En la primera posición aparecerá un carácter especial, 
    la primera letra generada debe ser obligatoriamente mayúscula,
    el resto minúsculas 
    y ningún valor se podrá repetir.
*/

/* [0.5] Pedir al usuario la que elija una opción,
   comprobar que la opción es correcta y si no lo es advertirle,
   repetir hasta que elija terminar */

// Función para generar un número aleatorio dentro de un rango
function numeroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

// [1] Generar un password débil
function generarPasswordDebil() {
  let password = "";

  // Agregar 5 letras aleatorias
  for (let i = 0; i < 5; i++) {
    password += letras[numeroAleatorio(letras.length)];
  }

  // Agregar 3 números aleatorios
  for (let i = 0; i < 3; i++) {
    password += numeros[numeroAleatorio(numeros.length)];
  }

  return password;
}

// [1.5] Generar un password fuerte
function generarPasswordFuerte() {
  const usado = new Set(); // Para asegurar que no se repitan caracteres
  let password = "";

  // Agregar un carácter especial al inicio
  let caracterEspecial;
  do {
    caracterEspecial = caracteresEspeciales[numeroAleatorio(caracteresEspeciales.length)];
  } while (usado.has(caracterEspecial));
  usado.add(caracterEspecial);
  password += caracterEspecial;

  // Agregar una letra mayúscula
  let letraMayuscula;
  do {
    letraMayuscula = letras.filter(c => c === c.toUpperCase())[numeroAleatorio(27)];
  } while (usado.has(letraMayuscula));
  usado.add(letraMayuscula);
  password += letraMayuscula;

  // Agregar 5 letras minúsculas
  for (let i = 0; i < 5; i++) {
    let letraMinuscula;
    do {
      letraMinuscula = letras.filter(c => c === c.toLowerCase())[numeroAleatorio(27)];
    } while (usado.has(letraMinuscula));
    usado.add(letraMinuscula);
    password += letraMinuscula;
  }

  // Agregar 4 números
  for (let i = 0; i < 4; i++) {
    let numero;
    do {
      numero = numeros[numeroAleatorio(numeros.length)];
    } while (usado.has(numero));
    usado.add(numero);
    password += numero;
  }

  // Agregar 2 caracteres especiales restantes
  for (let i = 0; i < 2; i++) {
    let caracter;
    do {
      caracter = caracteresEspeciales[numeroAleatorio(caracteresEspeciales.length)];
    } while (usado.has(caracter));
    usado.add(caracter);
    password += caracter;
  }

  return password;
}

// [0.5] Interacción con el usuario
function main() {
  let opcion;
  do {
    console.log("Elige una opción:");
    console.log("1: Generar password débil");
    console.log("2: Generar password fuerte");
    console.log("3: Terminar");
    opcion = prompt("Introduce una opción (1, 2 o 3):");

    if (opcion === "1") {
      console.log("Password débil: " + generarPasswordDebil());
    } else if (opcion === "2") {
      console.log("Password fuerte: " + generarPasswordFuerte());
    } else if (opcion !== "3") {
      console.log("Opción no válida. Por favor, intenta de nuevo.");
    }
  } while (opcion !== "3");

  console.log("Programa terminado.");
}

// Llamar a la función principal
main();
