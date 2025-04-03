function somaUniqueNumber(array) {
  const uniqueNumbers = new Set(array);
  let sum = 0;

  for (const number of uniqueNumbers) {
    sum += number;
  }

  return sum;
}

// Teste da função
const numbers = [1, 3, 3, 3, 3, 2, 3, 4, 5, 1, 2, 3, 3, 3, 3, 3];
const result = somaUniqueNumber(numbers);
console.log(`A soma dos números únicos é: ${result}`);
