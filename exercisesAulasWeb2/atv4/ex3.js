function validator(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num !== "number") {
        reject(new Error("O valor deve ser um número"));
      }
    }, 0);
    setTimeout(() => {
      if (num % 2 === 0) {
        reject(new Error("O número deve ser ímpar"));
      } else {
        setTimeout(() => resolve(num), 1000);
      }
    }, 1000);
  });
}

validator("a")
  .then((num) => {
    console.log(`O número ${num} é válido`);
  })
  .catch((error) => {
    console.error(error.message);
  });
