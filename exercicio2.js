function fibonacci(n) {
    let fibSeq = [0, 1];
    while (fibSeq[fibSeq.length - 1] < n) {
        fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
    }
    return fibSeq;
}

function verificarFibonacci(num) {
    let fibSeq = fibonacci(num);
    if (fibSeq.includes(num)) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

// Exemplo de uso
let numero = parseInt(prompt("Informe um número: "));
alert(verificarFibonacci(numero));
