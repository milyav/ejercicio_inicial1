//pueda imprimir un mensaje y mostrarlo en la consola

const leer = require("prompt-sync")();

console.log ("¿como te llamas?");
let nombreIngresado = leer()
console.log ("hola", nombreIngresado)
