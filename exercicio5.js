function inverterString(s) {
    let inversa = "";
    for (let i = 0; i < s.length; i++) {
        inversa = s[i] + inversa;
    }
    return inversa;
}

// Exemplo de uso
let entrada = prompt("Digite uma string:");
alert("String invertida: " + inverterString(entrada));
