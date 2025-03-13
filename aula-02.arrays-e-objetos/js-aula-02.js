// Array (Vetor ou Lista)
let produtos = [];
console.log(typeof produtos);

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(Produtos);

console.log("Exibindo a lista pelos índices...");
console.log(Produtos[0]);
console.log(Produtos[1]);
console.log(Produtos[2]);
console.log(Produtos[3]);

console.log(`1- ${Produtos[0]}`);
console.log(`2- ${Produtos[1]}`);
console.log(`3- ${Produtos[2]}`);
console.log(`4- ${Produtos[3]}`);

console.log("Exibindo a lista através do FOR...");
for (let c in Produtos) {
  console.log(`${Number(c)+1} - ${Produtos[c]}`);
}

console.log("Exibindo a lista através do forEach...")

Produtos.forEach(function (produto){
    console.log(produto)
})

console.log("Exibindo a lista através do forEach com os índices...")

Produtos.forEach((produto, i) => {
    console.log(`${i+1} - ${produto}`)
})

// Métodos de manupulação de Vetores
let vetor = ['Laranja' , 'Maca' , 'Banana']
console.log(`O nosso vetor e o: ${vetor}`)
vetor[3] = 'Morango'
console.log(`O nosso vetor agora é o: ${vetor}`)

// Método Push -  Insere um novo elemento no final do vetor

vetor.push('Abacaxi')
console.log(`O nosso vetor agora é o: ${vetor}`)

// Métido Unshift - Insere um novo elemento no início do vetor

vetor[0] = 'Pera'
console.log(`O nosso vetor agora é o: ${vetor}`)

vetor.unshift('Laranja')
console.log(`Nosso vetor agora é o: ${vetor}`)


// Método LENGTH - Retorna o número de elementos no vetor
let numeros = [6, 8, 2, 9, 3, 800, 200]
console.log(`Nossa lista de números é: ${numeros}`)
console.log(`O numero de elementos do vetor é: ${numeros.length}.`)

// Método SORT - Ordenar o vetor em ordem alfabética
console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}.`)
vetor.sort()
console.log(`Agora primeiro elemento da lista de frutas é: ${vetor[0]}.`)
console.log(`Nossa lista de frutas ordenada é: ${vetor.sort()}`)

// Ordenação de números com SORT
console.log(`Nossa lista de números é: ${numeros}`)
numeros.sort()
console.log(`Agora nossa lista de numeros ordenada é: ${numeros}`)

// Ordenando de forma crescente
console.log(numeros.sort((a, b) => a - b))

// Ordenando de forma Decrescente
console.log(numeros.sort((a, b) => b - a))

/////////////////////////////////////////////////////////////////////////////

// OBJETOS LITERAIS (não são derivados de classes)
// Objetos possuem Atributos (características) e métodos (ações)
// Lado esquerdo: chaves / Lado direito: valores --- ALT+Z

const pessoa = {}
console.log(typeof(pessoa))

const carro = {
  // Atributos
    modelo: 'gol',
    cor: 'vermelho',
    // Métodos
    acelerar(){
      console.log('Acelerando...');
    },
    frear(){
      console.log('Freando...');
    }
  }

console.log(`O modelo do carro eh: ${carro.modelo}`);
console.log(`A cor do carro eh: ${carro.cor}`);
carro.acelerar();
carro.frear();
 
////////////////////////////////////////////////////////////
 
const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho.",
};
 
console.log(produto);
console.log(`O ${produto.nome} da marca ${produto.marca} custa apenas ${produto.preco}. ${produto.descricao} `)
  //////////////////////////////////////////////////////////////////////////

  // ARRAY DE OBJETOS
  const listaProdutos = [
    {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 12000,
    descricao: "Ultra resistente, muito barato!",
  }
  ];
console.log()
  // Exibindo o ARRAY DE OBJETOS com for Each:
  listaProdutos.forEach(produto => {
    console.log(`Produto: ${produto.nome}`)
    console.log(`Marca: ${produto.marca}`)
    console.log(`Preço: ${produto.preco}`)
    console.log(`Descrição: ${produto.descricao}`)
    console.log()
  })

  // Console.table
  console.table(listaProdutos)