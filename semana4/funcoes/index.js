// EXEMPLO 1 

// function dizOi() {
//     console.log("oi")
// }

// dizOi()


// EXEMPLO 2

// ------------------------------------------- EXEMPLO DE FUNCAO NOMEADA -----------------

// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)

// function somaDoisNumeros(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }




// ------------------------------------------- EXEMPLO DE FUNCAO NÃO NOMEADA -----------------


// const somaDoisNumeros = function(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }
    
// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)



// ------------------------------------------- EXEMPLO DE ARROW FUNCTION (FUNCAO FLECHA) -----------------


// const somaDoisNumeros = (numero1, numero2) => {
//     const soma = numero1 + numero2
//     return soma
// }


// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)




// ------------------------------------------- EXERCÍCIO 1 -----------------

// function verificaArray(arrayDeParametro) {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length 
// }


// ------------------------------------------- EXERCÍCIO 2 -----------------


// const verificaTamanhoDoArray = (arrayDeParametro) => {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length
// }

// const profs = ["chijo", "paulinha", "sot", "caio", "severo"]

// const tamanhoDoArray = verificaTamanhoDoArray(profs)



// ============================================== Exercícios de interpretação de código ======================

// ===================== EXERCÍCIO 1

//  function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10)) 

//a. O que vai ser impresso no console?
// 10
// 50

//b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//Não aparecia nada no console mas a função teria funcionado porque ela foi invocada. Então daria o mesmo resultado da questão "a".


// ===================== EXERCÍCIO 2

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

//     outraFuncao(arrayDeNomes)
    
//a. Explicite quais são as saídas impressas no console
//Darvas
//Caio

//b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
//Se a função continuasse com o mesmo laço, o resultado seria:
//Amanda
//Caio

// ===================== EXERCÍCIO 3

// O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!
//A função abaixo quer extrair os números pares da array inicial ("array") e acrescentar numa array final ("arrayFinal") esses números multiplicados por eles mesmos.

// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
//   }


// ============================================== Exercícios de escrita de código ======================

// ===================== EXERCÍCIO 4

//a. "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante." =========== 

// function minhaFuncao() {
//     console.log("Eu sou a Tainah, tenho 25 anos, moro em São Paulo e sou artista visual.")
//     }

// minhaFuncao()

//b. Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante. =========== 


//  let dadosPessoais = (nome, idade, endereco, estudante) => {
//     if(estudante === true){
//      estudante = "sou"

//     } else if(estudante === false) {
//         estudante = "não sou"
     
//         } else {
//             console.log("Responda sou/não sou")
//         }
    
//     console.log(`Eu sou a ${nome}, tenho ${idade} anos, moro em ${endereco} e ${estudante} estudante.`)
//  }

//  dadosPessoais("tainah",25,"sp", false)



// ===================== EXERCÍCIO 5

//a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado =========== 


// let numeros = (a, b) => {
//     return a + b
// }

// let resultado = numeros(2, 3)
// console.log(resultado)


//b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo. =========== 

// let numeros = (a, b) => {
//     if(a > b){
//         return true

//     } else {
//         return false

//     }
// }

// let numerosInformados = numeros(7, 2)
// console.log(numerosInformados)


//c. Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 console.log dentro da função, use outra estrutura de código para isso) ===========


let minhaMensagem = (frase) => {
    for (i = 0; i < 10; i++){
        console.log(frase)
        }
    }

    minhaMensagem("oieeee")


