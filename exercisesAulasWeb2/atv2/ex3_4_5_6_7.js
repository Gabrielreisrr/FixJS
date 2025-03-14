// Atividade 3: Escreva uma função arrayToList que construa uma estrutura de lista como a mostrada quando
// fornecido[1, 2, 3] como argumento.

function arrayToList(array) {
    if (array.length === 0) {
        return null;
    } else {
        return {
            value: array[0],
            rest: arrayToList(lista.slice(1))
        };
    }
}

console.log(arrayToList([1, 2, 3, 4]));


// Atividade 4: Também escreva uma função listToArray que produza um array a partir de uma lista.
function listToArray(li) {
    let array = [];
    while (li !== null) {
        array.push(li.value);
        li = li.rest;
    }
    return array;
}

// Atividade 5: Adiciona um elemento no início da lista
function prepend(element, list) {
    return { value: element, rest: list };
}

// Atividade 6: Retorna o elemento na posição fornecida na lista
function nth(list, index) {
    if (list === null) return undefined;
    if (index === 0) return list.value;
    return nth(list.rest, index - 1);
}

// Atividade 7: Achata um array de arrays em um único array
function flatten(arrays) {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

// Testes
let lista = arrayToList([1, 2, 3, 4]);

console.log(listToArray(lista));
console.log(prepend(0, lista));
console.log(nth(lista, 2));
console.log(flatten([[1, 2], [3, 4], [5]])); 
