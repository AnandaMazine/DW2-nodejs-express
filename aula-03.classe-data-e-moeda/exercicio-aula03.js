// 1- CLASSES E OBJETOS
class Heroi {
    constructor(nome, vida, velocidade, forca){
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr(){
        return "O herói está correndo!";
    }
    andar(){
        return "O herói está andando!";
    }
    atacar(){
        return "O herói está atacando!";
    }
    defender(){
        return "O herói está se defendendo!";
    }
}
    const homemAranha = new Heroi();
    homemAranha.nome = "Homem-Aranha";
    homemAranha.vida = "10";
    homemAranha.velocidade = "100km/h";
    homemAranha.forca = "70/100";
    homemAranha.teia = 1;
    
    homemAranha.sentidoAranha = function (){
    return "O Homem-Aranha detectou perigo!";
    }

    console.log(`O herói ${homemAranha.nome}, tem ${homemAranha.vida} vidas, sua velocidade é de ${homemAranha.velocidade}, sua forca é de ${homemAranha.forca} e solta teia ${homemAranha.teia}.`)
    
    console.log(homemAranha.correr());
    console.log(homemAranha.andar());
    console.log(homemAranha.atacar());
    console.log(homemAranha.defender());
    console.log(homemAranha.sentidoAranha());

    console.log();

    const superman = new Heroi();
    superman.nome = "Superman";
    superman.vida = "10";
    superman.velocidade = "120km/h";
    superman.forca = "100/100";
    superman.podeVoar = 1;

    superman.visaoCalor =  function (){
        return "O Superman está usando a sua visão de calor!";
    }
    console.log(`O herói ${superman.nome}, tem ${superman.vida} vidas, sua velocidade é de ${superman.velocidade}, sua forca é de ${superman.forca} sabe voar ${superman.podeVoar}.`)

        console.log(superman.correr());
        console.log(superman.andar());
        console.log(superman.atacar());
        console.log(superman.defender());
        console.log(superman.visaoCalor());
    
        console.log();

    const batman = new Heroi();
    batman.nome = "Batman";
    batman.vida = "10";
    batman.velocidade = "70km/h";
    batman.forca = "50/100";
    batman.esconder = 1;

    batman.investigarCrime = function (){
        return "Batman está investigando um crime!"
    }

    console.log(`O herói ${batman.nome}, tem ${batman.vida} vidas, sua velocidade é de ${batman.velocidade}, sua forca é de ${batman.forca} sabe se esconder ${batman.esconder}.`)

    console.log(batman.correr());
    console.log(batman.andar());
    console.log(batman.atacar());
    console.log(batman.defender());
    console.log(batman.investigarCrime());
    console.log();

    ///////////////////////////////////////////////////////////////////////////
    // 2- Manipulação de Datas

    const dataAtual = new Date();
    dataAtual.setDate(dataAtual.getDate()+3);
    dataAtual.setMonth(dataAtual.getMonth()+2);
    dataAtual.setFullYear(dataAtual.getFullYear()+1);

    const exibirData = () => {
        return `${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}.`
    }
    console.log(exibirData())

    ////////////////////////////////////////////////////////////////////////////
    // 3- Formatação de Moedas
    
    let salarioDolar = (salReal) =>{
        return salReal * 0.176;
    }

    let salarioEuro = (salReal) =>{
        return salReal * 0.16;
    }
    console.log(salarioDolar(3000).toLocaleString("en", { style: "currency", currency: "USD" }));
        
    console.log(salarioEuro(3000).toLocaleString("en", {style: "currency", currency: "EUR"}))

    //////////////////////////////////////////////////////////////////////////////////
    //4- Formatação de Strings

    const exibirNome = (nome) => {
        console.log(nome.toUpperCase())
        console.log(nome.toLowerCase())
        console.log(nome.length)
    }
    const meuNome = "Ananda Mazine"
    exibirNome(meuNome)