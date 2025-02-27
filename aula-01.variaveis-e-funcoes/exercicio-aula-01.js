// 1- FUNÇÃO SIMPLES - Crie uma função simples que exiba no console seu nome, sua idade e sua cidade. Não esqueça de invocar a função no final).

function nic() {
  console.log("Meu nome é Ananda, tenho 28 anos e moro em Registro/SP");
}
nic();

// 2- Função com parâmetros – Crie uma função que receba dois números como parâmetro em seguida faça a divisão entre eles. O resultado deve ser exibido no console concatenado com uma string. (Ex: “O resultado da divisão foi...”). A função deve ser chamada ao final passando dois números como argumento.

function divisao(n1, n2) {
  let resultado = n1 - n2;
  console.log(`A divisão dos dois numeros é de ${resultado}`);
}
let n1 = 10;
let n2 = 5;
divisao(n1, n2);

// 3- Função com retorno - Crie uma função que receba três números e retorne a multiplicação entre esses números. O resultado deve ser exibido no console.

function mult(n1, n2, n3) {
  return n1 * n2 * n3;
}
console.log(`O resultado da multiplicação é ${mult(2, 3, 4)}`);


// 4 - Função com mais de um retorno – Crie uma função que receba uma idade como parâmetro. Se a idade for >= 18, a função deve retornar o valor “Maior de idade”, se não deve retornar “Menor de idade”. O resultado deve ser exibido no console.

function maiorIdade(n){
    if (n >=18){
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
let num = 19;
console.log(maiorIdade(num));
console.log(`Você tem ${num} e é ${maiorIdade(num)}`);

// 5- Função anônima - Crie uma função anônima que receba duas notas como parâmetro. Se a média dessas notas for <=5, a função deve retornar o valor “Reprovado”, se não deve retornar o valor “Aprovado”.  O resultado deve ser exibido no console. Considere média = (nota1 + nota2) / 2.

let media = function (m){
  if (m <=5) {
      return "Reprovado";
  } else {
      return "Aprovado";
  }
}
m = (10 + 10)/2;
console.log(`A média é de ${m} e você está ${media(m)}!`);

//6 - Arrow function com parâmetro único – Crie uma arrow function que receba um número como parâmetro e retorne o triplo desse número. O resultado deve ser exibido no console concatenado com uma string. (Ex: “O triplo do número é...”)

const triplo = (x) => {
  return x*3;
}
console.log(triplo(10));
console.log(`O triplo do número é: ${triplo(10)}.`);

// 7 - Arrow function com mais de um parâmetro. Crie uma arrow function que receba quatro números como parâmetro e retorne a soma entre esses números. O resultado deve ser impresso no console.

const soma = (n1, n2, n3, n4) => {
  return n1 + n2 + n3 + n4;
}
console.log(`O resultado da operação é: ${soma(2, 3, 4, 5)}`);

// IIFE – Crie uma função imediata que receba o nome de uma pessoa como parâmetro e exiba no console uma saudação a essa pessoa.

const start = (function(nome){
  console.log(`Boa noite, ${nome}`);
})
("Ananda!")