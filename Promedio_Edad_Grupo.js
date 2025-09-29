// Solicitamos las edades de 4 personas
let edad_1 = parseInt(prompt("Ingrese la edad de la primera persona: "));
let edad_2 = parseInt(prompt("Ingrese la edad de la segunda persona: "));
let edad_3 = parseInt(prompt("Ingrese la edad de la tercera persona: "));
let edad_4 = parseInt(prompt("Ingrese la edad de la cuarta persona: "));

// Calculamos el promedio de la edad
let promedio = ( edad_1 + edad_2 + edad_3 + edad_4 ) / 4 ;

// Mostramos el mensaje con una alerta
alert("Promedio: " + promedio);