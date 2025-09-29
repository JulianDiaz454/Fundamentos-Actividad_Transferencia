// Solicitamos el precio del producto
let precio_original = parseFloat(prompt("Ingrese el precio original del producto: "));

// Calculamos el descuento 
let monto_descuento = precio_original * 0.10; 
let precio_final = precio_original - monto_descuento;

// Mostramos el resultado con una alerta
alert("Precio original: " + precio_original + " - Valor del descuento: " + monto_descuento + " Total a pagar: " + precio_final);