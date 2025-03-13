//Arrays 1 – Crie um vetor contendo os nomes de todos os estados brasileiros. Em seguida, exiba esse vetor na tela através de uma estrutura forEach. Os índices do vetor também devem ser exibidos.

let estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
console.log(estados);

estados.forEach((estados, i) => {
    console.log(`${i+1} - ${estados}`)
})

// Objetos literais 2 – Crie um objeto literal para descrever você. Esse objeto deve ter no mínimo 5 chaves, por exemplo, nome, idade, cidade, hobby, música preferida. Em seguida, exiba as chaves e valores na tela.

const pessoa = {
    nome: 'Ananda',
    idade: 28,
    cidade: 'Miracatu',
    hobby: 'Jogar jogos de tabuleiro e montar quebra-cabeça',
    musica_preferida: "It's my life da banda Bon Jovi",
}
console.log()
console.log(`Meu nome é ${pessoa.nome}, eu tenho ${pessoa.idade} anos, moro em ${pessoa.cidade}, meu hobby favorito é ${pessoa.hobby}, e minha música preferida é ${pessoa.musica_preferida}!`)

// Array de objetos 3 – Crie um array de objetos de filmes com no mínimo 5 filmes. Cada filme deve possuir no mínimo 4 chaves, por exemplo, título, gênero, ano e classificação de idade. Em seguida, exiba o array de objetos através de uma estrutura forEach.

const listaFilmes = [
    {
        titulo: 'Crepúsculo',
        genero: 'Romance e Fantasia',
        ano: 2008,
        classificacao_idade: '12 anos',
    },
    {
        titulo: 'A Saga Crepúsculo: Lua Nova',
        genero:'Romance e Fantasia',
        ano: 2009,
        classificacao_idade:'12 anos',
    },
    {
        titulo: 'A Saga Crepúsculo: Eclipse',
        genero:'Romance e Fantasia',
        ano: 2010,
        classificacao_idade:'12 anos',
    },
    {
        titulo: 'A Saga Crepúsculo: Amanhecer - Parte 1',
        genero:'Romance e Fantasia',
        ano: 2011,
        classificacao_idade:'12 anos',
    },
    {
        titulo: 'A Saga Crepúsculo: Amanhecer - Parte 2',
        genero:'Romance e Fantasia',
        ano: 2012,
        classificacao_idade:'12 anos',
    },
];
console.log()
listaFilmes.forEach(filme => {
    console.log(`Título: ${filme.titulo}`)
    console.log(`Gênero: ${filme.genero}`)
    console.log(`Ano: ${filme.ano}`)
    console.log(`Classificação Indicativa: ${filme.classificacao_idade}`)
    console.log()
})

