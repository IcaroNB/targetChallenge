/* 1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA? */

let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {

  K = K + 1;

  SOMA = SOMA + K;

}

console.log(SOMA);

/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */

function sequenciaFibonacci(n) {
  let seqFib = [0, 1];
  while (seqFib[seqFib.length - 1] <= n) {
    let proxFib = seqFib[seqFib.length - 1] + seqFib[seqFib.length - 2];
    if (proxFib <= n) {
      seqFib.push(proxFib);
    } else {
      break;
    }
  }
  return seqFib;
}

function verificaPertence(numero, seqFib) {
  for (let i = 0; i < seqFib.length; i++) {
    if (numero === seqFib[i]) {
      return true;
    }
  }
  return false;
}

// let numero = parseInt(prompt("Informe um número: ")); //Para uso em navegadores
let numero = 345678; // Indicando o número diretamente

let seqFib = sequenciaFibonacci(numero);
if (verificaPertence(numero, seqFib)) {
  console.log("O número " + numero + " pertence à sequência de Fibonacci.");
} else {
  console.log("O número " + numero + " não pertence à sequência de Fibonacci.");
}



/*
3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____

*/

"A) 9"
"B) 128"
"C) 49"
"D) 100"
"E) 13"
"F) 21"

/*
4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

*/

"Primeiramente ligaria um interruptor e esperaria alguns minutos. Desligaria o primeiro interruptor. Após isso, ligaria o segundo interruptor e iria até a sala das lâmpadas. A lâmpada que está ligada é responsabilidade do segundo interruptor, a lâmpada que estivesse quente e apagada, é responsabilidade do primeiro interruptor, sendo assim a lâmpada apagada e fria é de responsabilidade do terceiro interruptor."
/*
5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;



NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU .*/

function inverterString(string) {
  let stringInvertida = '';
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }
  return stringInvertida;
}


let minhaString = 'Hello, world!';
let stringInvertida = inverterString(minhaString);
console.log("String original: " + minhaString);
console.log("String invertida: " + stringInvertida);
