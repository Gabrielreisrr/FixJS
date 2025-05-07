// Atividade 4. Verifique quais dos valores abaixo são Truthy e Falsy.Faça - o
//  utilizando a função Boolean(valor) e imprima o resutado:

x = Array(10, true, false, {}, undefined, null, "", "abba", 0);

for (let i of x) console.log(Boolean(i));

const x = "s";

console.log(Boolean(x)); // true
console.log(Boolean(0)); // false
