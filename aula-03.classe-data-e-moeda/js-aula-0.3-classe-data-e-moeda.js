// CLASSES NO JS =  SHIFT + ALT + SETA PARA BAIXO - SHIFT + ALT + F
// Classe = molde para criar outros objetos(modelo)
class Carro {
  // Nome de classes devem iniciar com a primeira letra maíscula
  // ATRIBUTOS
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  // MÉTODOS
  buzinar() {
    return "beep, beep!";
  }
}

// Criando uma instância (objeto) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", "2012");
console.log(
  `O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${
    carroPopular.ano
  } e faz ${carroPopular.buzinar()}`
);

// Instância Carro Esportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";

console.log(
  `O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${
    carroEsportivo.ano
  } e faz ${carroEsportivo.buzinar()}`
);

// ADICIONANDO UM NOVO ATRIBUTO
carroEsportivo.corNeon = "Azul";

// ADICIONANDO UM NOVO MÉTODO
carroEsportivo.turbo = function () {
  return "Vrummmmm! O carro está acelerando!";
};

console.log(
  `O carro ${carroEsportivo.modelo} tem neon da cor ${
    carroEsportivo.corNeon
  }. ${carroEsportivo.turbo()}`
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MANIPULANDO DATAS NO JS

const dataAtual = new Date();
console.log(typeof dataAtual);

// Pegando o dia atual
const dia = dataAtual.getDate();
console.log(`Hoje é dia ${dia}.`);

// Pegando o mês atual
const mes = dataAtual.getMonth() + 1;
console.log(`Estamos no mês ${mes}.`);

// Pegando o ano atual
const ano = dataAtual.getFullYear();
console.log(`Ano atual: ${ano}.`);

//Adicionando dias, meses e anos à data ATUAL
// Adicinar 10 dias à data atual

dataAtual.setDate(dataAtual.getDate() + 10);

// Exibe a nova data:
console.log(`Daqui a 10 dias será ${dataAtual.getDate()}.`);

//Adicionar 3 meses à data atual

dataAtual.setMonth(dataAtual.getMonth() + 3);

// Exibir nova data
console.log(`Daqui a 3 meses será o mês ${dataAtual.getMonth() + 1}.`);

// Adiconar 2 anos à data atual
dataAtual.setFullYear(dataAtual.getFullYear() + 2);

// Exibir o novo ano
console.log(`Daqui à 2 anos será ${dataAtual.getFullYear()}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TRABALHANDO COM MOEDAS NO JS
let salario = 2500.3;
console.log(salario);
// Mostrando as casas decimais
console.log(salario.toFixed(2));
// Ocultando as casas decimais
console.log(salario.toFixed(0));
// Alterando marcador de casa decimal
console.log(salario.toFixed(2).replace(".", ","));

// FORMATAÇÃO EM MOEDAS
// Mostrando o salário em real
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);

// Mostrando o salário em Dolar (USD)
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "USD" })
);

// CONVERTENDO DE REAL PARA DÓLAR
const salarioDolar = salario * 0.176;
console.log(
  salarioDolar.toLocaleString("en", { style: "currency", currency: "USD" })
);

// CONVERTENDO DE REAL PARA EURO
const salarioEuro = salario * 0.176;
console.log(
  salarioEuro.toLocaleString("en", { style: "currency", currency: "EUR" })
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FORMATAÇÃO DE STRING
const nome = "Ananda Mazine";

// ALTERNANDO PARA LETRAS MAÍSCULAS
console.log(nome.toUpperCase());

// ALTERNANDO PARA LETRAS MINÚSCULAS
console.log(nome.toLowerCase());

// CONTANDO CARACTERES DE UMA STRING
console.log(nome.length)


// REMOVENDO ESPAÇOS
const novoNome = nome.replace(/\s/g, "")
console.log(novoNome)
console.log(novoNome.length)