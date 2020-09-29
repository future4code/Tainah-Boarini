
//Exercícios de interpretação de código
//EXERCÍCIO 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// //a. false

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)
// //b. false

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)
// //c. true

// console.log("e. ", resultado)
// //e. true

// // //EXERCÍCIO 2

// let array
// console.log('a. ', array)
// //a. undefined

// array = null
// console.log('b. ', array)
// //b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// //c. 11

// let i = 0
// console.log('d. ', array[i])
// //d. 3

// array[i+1] = 19
// console.log('e. ', array)
// //e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)
// //f. 9

//Exercícios de escrita de código
 //EXERCÍCIO 1

 const idade =  prompt("Qual a sua idade?")
 const idadeAmigo = prompt("Qual a idade do seu melhor amigo?")

 const idadeNumber = Number(idade)
 const idadeAmigoNumber = Number(idadeAmigo)
 
 
 console.log("Sua idade é maior do que a do seu melhor amigo?")
 const sim = true
 const não = false
 const nao = false
 console.log("Sim", sim)
 console.log("Não", não)
 console.log("Nao", nao)

 const diferençaIdade = (idadeNumber - idadeAmigoNumber)
 console.log(diferençaIdade)

//EXERCÍCIO 2

let numeroString = prompt("Escreva um número par")
let numero = Number(numeroString)
const numeroFixo = 2

console.log(numero)

let restoDaDivisao = numero % numeroFixo

console.log(restoDaDivisao)
//c. o resto é sempre zero
//d. o console mostra o resto da divisão no numero inserido (ímpar) dividido por 2


 let listaDeTarefas = []

 let primeiraTarefa = prompt("Cite uma tarefa que faz ao acordar")
 let segundaTarefa = prompt("Cite uma tarefa que faz ao terminar o almoço")
 let terceiraTarefa = prompt("Cite uma tarefa que faz aos fins de semana")

 listaDeTarefas.push(primeiraTarefa)
 listaDeTarefas.push(segundaTarefa)
 listaDeTarefas.push(terceiraTarefa)

 console.log(listaDeTarefas)

 let indice = prompt("Digite o índice de uma tarefa que já realizou")
 indiceNumber = Number(indice)

 listaDeTarefas.splice(indiceNumber,1)

 console.log(listaDeTarefas)
 

// EXERCÍCIO 3

const nomeDoUsuario = prompt("Qual é o seu primeiro nome?")
const emailDoUsuario = prompt("Digite seu e-mail")

alert(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//Desafios Extras 
//Desafio 1

let GRAUS_FAHRENHEIT = 77
let GRAUS_CELSIUS = 30

let KELVIN = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
console.log(`${KELVIN}K`)           

let GRAUS_FAHRENHEIT2 = (GRAUS_CELSIUS*9/5) + 32 
console.log(`${GRAUS_FAHRENHEIT2}°C`)

let KELVIN2 = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
console.log(`${KELVIN2}°C`)


//Não finalizado***

// let GRAUS_FAHRENHEIT 
// let GRAUS_CELSIUS 

// let KELVIN = (typeof GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
// console.log(`${KELVIN}K`)           

// let GRAUS_FAHRENHEIT2 = (typeof GRAUS_CELSIUS*9/5) + 32 
// console.log(`${GRAUS_FAHRENHEIT2}°C`)

// let KELVIN2 = (typeof GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
// console.log(`${KELVIN2}°C`)


