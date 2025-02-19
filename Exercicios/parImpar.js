// Faça um programa para automatizar o resultado o jogo de 
// par ou ímpar. Seu programa deve ler a quantidade de dedos que cada um utilizou e imprimir o nome do ganhador.

const parImpar = (x, y) => {
    if (x > 5 || y > 5 ) return "quantidade invalida";
    total = x + y;
    return (total % 2 === 0) ? "pedro" : "gabriel"
}

// se for par

console.log(parImpar(3, 6));