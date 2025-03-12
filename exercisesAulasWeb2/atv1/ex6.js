// Atividade 6. Faça uma atribuição via desestruturação utilizando o objeto
// abaixo:
let person = { name: "Alice", age: 25 };

const { name: nm, age: ag } = person;

console.log(nm); // Alice
console.log(ag); // 25