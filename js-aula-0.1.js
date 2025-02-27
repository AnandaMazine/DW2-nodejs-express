//comentário em linha
/* Comentario
em bloco
CTRL + ; - atalho
*/
// Declaração de variáveis no JS
// CONST X LET X VAR
// por questões de segurança evitar o uso de VAR
// No escopo global CONST não pode ser alterada

const nome = "Ananda" //Uma constante precisa de um valor inicial
let Nome // permite inicar a variável sem valor
// const nome = Mazine - resulta em um erro
// let Nome - Resulta em um erro
var cor = "azul"
var cor = "amarelo"
let cidade = "Registro"
cidade = "Jacupiranga" //let permite alterar o valor da variável

const message = "Hello, World! Iniciando estudos com JavaScript!"
console.log(message)
// Typeof (esse comando exibirá o tipo da variável)
const estado = "SP"
const idade = 18
let endereco
console.log(typeof(estado))
console.log(typeof(idade))
console.log(typeof(endereco))

//O JS é uma linguagem de tipagem dinâmica e tipagem fraca
//////////////////////////////////////////////////////////

// Tipos de funções no JS

function minhaFuncao (){

}
console.log(typeof(minhaFuncao))

// Função Simples
function saudacao(){
    console.log("Olá, bem-vindo!")
}
saudacao()

// Função com parâmetros/argumento 
// Parâmetro é um dado que a função recebe
// Argumento é um dado que é enviado para a função

function Saudacao(nome){ // PARÂMETRO
    console.log("Olá, bem-vindo " + nome) // Concatenando
    // Template Strings
    console.log(`Olá, bem-vindo ${nome}`)
    // $ {} - Placeholder
    }
Saudacao('Ananda') // ARGUMENTO

// Função com mais de um parâmetro

function soma(n1, n2){
    let resultado = n1 + n2
    console.log(`A soma dos dois numeros: ${resultado}`)
}
let n1 = 6
let n2 = 10
soma(n1, n2)

//Função com retorno
function Soma(n1, n2){
    return n1 + n2
}
console.log(`A soma dos dois numeros foi ${Soma (2,6)}`)

// Função com mais de um retorno
function parImpar(n){
    if (n % 2 == 0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
let num = 4
console.log(parImpar(num))
console.log(`O numero ${num} é ${parImpar(num)}!`)

// Função Anônima
let dobro = function(x){
    return x*2
}
console.log(dobro(15))
console.log(`O dobro do numero é ${dobro (15)}!`)

// ARROW FUNCTION COM PARÂMETRO ÚNICO
// FUNÇÃO FLECHA
// Tipo de função anônima; forma reduzida

const Dobro = (x) => {
    //Para declarar dois parâmetros ou mais, manter os parênteses
    return x * 2;
  };
  
  console.log(Dobro(20));
  console.log(`O dobro do número é: ${Dobro(20)}`);
  
  
  // ARROW FUNCTION COM MAIS DE UM PARÂMETRO
  
  const calc = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`); // eval = função nativa do Javascript
  };
  
  console.log(`O resultado da operação é: ${calc(6, "*", 6)}`);
  
  
  // SIMPLIFICANDO ARROW FUNCTION
  
  const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`); 
  
    console.log(`O resultado da operação é: ${Calc(7, "*", 7)}`);
  
  
  // IIFE - Immediately Invoked Function Expression
  // Função Imediata
  
  const life = (function() {
      console.log("Estoy")
  })
  
  //IIFE com parâmetro
  
  const start = (function(app){
      console.log(`Executando imediatamente o app ${app}.`)
  })
  ("Whatsapp")