//  Atividade 2. O operador == compara objetos pela identidade.Mas às vezes é preferível comparar os valores
//  de suas propriedades reais.Escreva uma função chamada deepEqual que recebe dois valores e retorna true
//  apenas se eles forem o mesmo valor ou forem objetos com as mesmas propriedades, onde os valores das
//  propriedades são iguais quando comparados com uma chamada recursiva a deepEqual.
//  Para descobrir se os valores devem ser comparados diretamente(use o operador === para isso) ou se suas
//  propriedades devem ser comparadas, você pode usar o operador typeof.
//  Se ele produzir "object" para ambos os valores, você deve fazer uma comparação profunda.
//  Você precisa levar em conta uma exceção boba: por causa de um acidente histórico, typeof null
//  também produz "object".

function deepEqual(a, b) {

    if (a === b) {
        return true;
    }

    if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
        return false;
    }


    let keysA = Object.keys(a);
    let keysB = Object.keys(b);


    if (keysA.length !== keysB.length) {
        return false;
    }


    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }

    return true;
}

const x = { a: { 'z': 1 }, b: 2 };
const y = { a: { 'z': 1 }, b: 2 };

console.log(deepEqual(y, x));