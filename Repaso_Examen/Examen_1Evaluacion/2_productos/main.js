/* Ejercicio 2 [0.5 puntos] */

/* Dado el siguiente array de objetos */

const productos = [
  {
    nombre: "Producto1",
    fecha: new Date("2021-06-15"),
  },
  {
    nombre: "Producto2",
    fecha: new Date("2021-05-02"),
  },
  {
    nombre: "Producto3",
    fecha: new Date("2020-05-17"),
  },
  {
    nombre: "Producto4",
    fecha: new Date("2021-07-01"),
  },
  {
    nombre: "Producto5",
    fecha: new Date("2023-02-10"),
  },
  {
    nombre: "Producto6",
    fecha: new Date("2022-09-16"),
  },
];

// [0.25] Mostrar por consola el array ordenado por fecha.
const productosOrdenados = [...productos].sort((a, b) => a.fecha - b.fecha);
console.log("Array ordenado por fecha:");
console.log(productosOrdenados);

// [0.25] Mostrar por consola el array con los productos con menos de dos años de antigüedad.
const hoy = new Date();
const dosAniosAtras = new Date(hoy.setFullYear(hoy.getFullYear() - 2));

const productosRecientes = productos.filter(
  (producto) => producto.fecha > dosAniosAtras
);

console.log("Productos con menos de dos años de antigüedad:");
console.log(productosRecientes);