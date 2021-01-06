//a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

let minhaString: string = "string"
// let minhaString2: string = 2 >> Type 'number' is not assignable to type 'string'.ts(2322) >>> Ele só reconhece string quando coloco o type como string.

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

let meuNumero: number | string = 2
let meuNum: number | string = "Oie"

//Devemos usar o Union Type

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

const person = {
    nome: "string", 
    idade:"number",
    corFavorita: "string" 
}

//Como você faria para garantir que o objeto só tenha as propriedades descritas acima? Faça a tipagem do objeto para que ele só aceite os valores acima.

//d) Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

type person = {
    nome: string,
    idade: number,
    corFavorita: string
}

const user: person = {
    nome: "Tainah",
    idade: 26,
    corFavorita: "Turquesa"
}

//e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.

 enum CorArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    INDIGO = "Indigo",
    VIOLETA = "Violeta"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const tainah: pessoa = {
    nome: "Tainah",
    idade: 26,
    corFavorita: CorArcoIris.INDIGO
}

const bianca: pessoa = {
    nome: "bianca",
    idade: 27,
    corFavorita: CorArcoIris.LARANJA
}

const bruno: pessoa = {
    nome: "bruno",
    idade: 22,
    corFavorita: CorArcoIris.VIOLETA
}

console.log(bruno.corFavorita)