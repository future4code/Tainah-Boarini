// ------------------------------------------- Exercícios de interpretação de código -------------------------------------

// EXERCÍCIO  1 | O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
//Ele significa que as variáveis "valor" e "i" começam em 0, a condição de continuação do looping é quando o "i" for menor que 5 e o incremento é a soma de +1 ao "i"
//Será impressa as somas dos valores 1, 2, 3, 4, que é 10

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// EXERCÍCIO  2 | a. O que vai ser impresso no console? | b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
//a. Serão impressos os números 19, 21, 23, 25, 27, 30
//b. Não. 

// let indice = 0

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     console.log("Índice: ", indice)

//   if (numero > 18) {
//         console.log(numero)
        
//     }
//     indice += 1
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// EXERCÍCIO  3 

// //a. Imprima cada um dos valores do array original.

// const arrayOriginal = [10, 11, 12, 15, 18, 19, 21, 23]

//     for (let elemento of arrayOriginal) {
//         console.log(elemento)}
    
// ------------------------------

//b. Imprima cada um dos valores do array original divididos por 10

// const arrayOriginal = [10, 11, 12, 15, 18, 19, 21, 23]

//     for (let elemento of arrayOriginal) {
//         console.log(elemento / 10)}

// ------------------------------

//c. Crie um novo array contendo, somente, os números pares do array original. | Imprima esse novo array

// const arrayOriginal = [10, 11, 12, 15, 18, 19, 21, 23]

//     for (let elemento of arrayOriginal) {
//         if (elemento % 2 === 0){ 
//             console.log(elemento)
//         }
//     }
        
// ------------------------------

//d. Crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero" | Imprima este novo array

// const arrayOriginal = [10, 11, 12, 15, 18, 19, 21, 23]
// let contador = 0

//     for (let numero of arrayOriginal){
//         console.log(`O número do índex ${contador} é: ${numero}`)
//         contador ++
//     }

// ------------------------------

//e. Escreva um programa que imprima no console o maior e o menor números contidos no array original

const arrayOriginal = [10, 11, 12, 15, 18, 19, 21, 23]

let valorMaximo = -Infinity
let valorMinimo = Infinity

for (let numero of arrayOriginal) {
    if (numero > valorMaximo) {
        valorMaximo = numero
    }
    if (numero < valorMinimo) {
        valorMinimo = numero
    }
}
console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)