// Solicitamos la cantidad de kilometros recorridos y el consumo por kilometro
let kilometros_recorrido = parseFloat(prompt("Ingrese la cantidad de kilometros recorridos: "));
let consumo_kilometro = parseFloat(prompt("Ingrese el consumo de litros de gasolina por kilometro: "));

// Realizamos el calculo de litros consumidos
let consumo_litros = consumo_kilometro / kilometros_recorrido; 

// Mostramos el mensaje con una alerta
alert("Consumo total: " + consumo_litros + "L");