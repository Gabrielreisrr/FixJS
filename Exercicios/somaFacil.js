// Faça um programa para ler dois valores inteiros e fazer a soma, os valores não pode ser maiores que 1000

function soma (a, b) {
    return (a < 1000 && b < 1000) ? a + b : "Valor maior que 1000";
}

console.log(soma(10000, 5));