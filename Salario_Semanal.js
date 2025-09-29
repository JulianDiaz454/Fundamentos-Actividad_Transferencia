// Solicitamos los datos del usuario
let horas_trabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas en la semana: "));
let valor_por_hora = parseFloat(prompt("Ingrese el valor de cada hora: "));

// Calculamos el salario semanal 
let salario = horas_trabajadas * valor_por_hora;

// Mostramos el resultado en una alerta
alert("Salario: " + salario);