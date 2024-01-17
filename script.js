let calculo_fibonacci;

do {
    let userInput = prompt("¿Hasta qué número desea calcular la secuencia de Fibonacci?");
    calculo_fibonacci = parseFloat(userInput);

    if (isNaN(calculo_fibonacci)) {
        alert("Por favor, ingrese un valor numérico válido.");
    }
} while (isNaN(calculo_fibonacci));

function calcularFibonacci(numero) {
    if (numero <= 1) {
        return numero;
    } else {
        return calcularFibonacci(numero - 1) + calcularFibonacci(numero - 2);
    }
}

// Calcular la secuencia de Fibonacci
let resultadoFibonacci = [];
for (let i = 0; i < calculo_fibonacci; i++) {
    resultadoFibonacci.push(calcularFibonacci(i));
}

// Mostrar el resultado en el documento
document.write(`La secuencia de Fibonacci hasta ${calculo_fibonacci} es: ${resultadoFibonacci.join(', ')}`);
