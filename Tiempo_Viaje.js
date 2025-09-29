// Solicitamos la distancia del recorrido en kilómetros y la velocidad promedio
let distancia_km = parseFloat(prompt("Ingrese la distancia total del recorrido en kilómetros (km): "));
let velocidad_promedio = parseFloat(prompt("Ingrese la velocidad promedio esperada en kilómetros por hora (km/h): "));

// Calculamos el tiempo estimado del viaje en horas
let tiempo_horas = distancia_km / velocidad_promedio; 

// Mostramos el resultado con una alerta
alert("Tiempo de viaje: " + tiempo_horas + " horas");