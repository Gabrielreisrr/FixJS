//  Atividade 1. Crie uma função que após 5 segundos dobre o resultado de um número passado como
//  argumento. Essa função deverá retornar uma Promise. Use o setTimeOut como temporizador

function dobrarEm5Segundos(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 5000);
  });
}

dobrarEm5Segundos(10).then((resultado) => {
  console.log(resultado);
});
