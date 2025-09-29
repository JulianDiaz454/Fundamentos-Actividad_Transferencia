// Solicitamos los datos del usuario
let nombre_producto = prompt("Ingrese el nombre del producto: ");
let precio_producto = parseFloat(prompt("Ingrese el valor del producto: "));
let cantidad = parseFloat(prompt("Ingrese la cantidad de producto: "));

// Generamos la factura y la mostramos en una alerta
alert("El total a pagar por " + cantidad + " de " + nombre_producto + " : " + (cantidad * precio_producto));