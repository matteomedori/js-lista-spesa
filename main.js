"use strict";

//array lista della spesa
const listaDellaSpesa = ["Pasta", "Latte", "Acqua", "Sale", "Pane", "Carne"];

//inizializzo variabile indice
let indice = 0;
//ciclo che continua finché indice è minore della lunghezza dell'array
while (indice < listaDellaSpesa.length) {
  console.log(listaDellaSpesa[indice]);
  indice++;
}
