const faturamentoDiario = {
    "SP": [67836.43, 0, 0, 65432.12, 0],
    "RJ": [36678.66, 33000.45, 0, 0],
    "MG": [29229.88, 0, 0, 25000.00],
    "ES": [27165.48, 0, 26000.00],
    "Outros": [19849.53, 0, 0, 18500.00]
};

const faturamentoDiarioFlat = [].concat(...Object.values(faturamentoDiario).map(estados => estados.filter(valor => valor > 0)));

const menorValor = Math.min(...faturamentoDiarioFlat);
const maiorValor = Math.max(...faturamentoDiarioFlat);
const mediaMensal = faturamentoDiarioFlat.reduce((acc, valor) => acc + valor, 0) / faturamentoDiarioFlat.length;
const diasAcimaMedia = faturamentoDiarioFlat.filter(valor => valor > mediaMensal).length;

console.log(`Menor valor de faturamento: R$${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento superior à média: ${diasAcimaMedia}`);
