// Atividade 3: Escreva uma função arrayToList que construa uma estrutura de lista como a mostrada quando
// fornecido[1, 2, 3] como argumento.

function arrayToList(lista) {
    if (lista.length === 0) {
        return null;
    } else {
        return {
            value: lista[0],
            rest: arrayToList(lista.slice(1))
        };
    }
}

console.log(arrayToList([1, 2, 3, 4]));


// Atividade 4: Também escreva uma função listToArray que produza um array a partir de uma lista.

function listToArray(arr) {


}