// Bino está aprendendo a multiplicar números e gostaria da sua ajudar para apresentar a tabuada de um determinado valor inteiro 

class Tabuada {

    calculoTaboada(num){

        for(let i = 0; i <= 10; i++ ){
            console.log(num * i);
        }
    }
}

const multiplicacao = new Tabuada();

multiplicacao.calculoTaboada(5);