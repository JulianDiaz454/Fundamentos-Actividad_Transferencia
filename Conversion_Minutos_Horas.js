// Solicitamos la cantidad total de minutos
let total_minutos = parseInt(prompt("Ingrese la cantidad total de minutos: "));

// Calculamos las horas y los minutos restantes
let horas = Math.floor(total_minutos / 60); // La función floor redordea hacia abajo al número entero
let minutos = total_minutos % 60; // Obtiene el residuo de una division

// Mostramos el resultado con una alerta
alert(total_minutos + " minutos equivalen a: " + horas + " horas y " + minutos + " minutos.");