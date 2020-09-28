a = 10
b = 10

console.log(b)
// 10

b = 5
console.log(a, b)
// 10 5


a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)
// // 10 10 10 

    let firstName 
    console.log(typeof firstName)
    //foi impresso "undefined" por não ter nenhum valor atribuído.

    let age 
    console.log(typeof age)
    //foi impresso "undefined" por não ter nenhum valor atribuído.


firstName = prompt("Qual é o seu nome?")
console.log(typeof firstName)
//foi impresso "string"

age = prompt("Qual é sua idade?")
console.log(typeof age)
//foi impresso "string"

console.log(`Olá ${firstName}, você tem ${age} anos`)


    let bebida = prompt ("1. Nescau ou Toddy?")
    console.log(`Resposta: ${bebida}`)

    let habitosMatutinos = prompt("2. Qual a primeira ação que você executa de manhã?")
    console.log(`Resposta: ${habitosMatutinos}`)

    let clima = prompt("3. Prefere frio ou calor?")
    console.log(`Resposta: ${clima}`)

    let lazer = prompt("4. Qual seu lugar favorito para viajar?")
    console.log(`Resposta: ${lazer}`)

    let animal = prompt("4. Qual seu animal favorito?")
    console.log(`Resposta: ${animal}`)


let comidasFavoritas = ["abacate", "manga", "melancia", "laranja", "banana"]
console.log(comidasFavoritas)

console.log(`Essas são as minhas comidas preferidas:
${comidasFavoritas[0]}
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}`)

    let comidaFavoritaUser = prompt("Qual é a sua comida favorita?")

    comidasFavoritas[1] = comidaFavoritaUser

    console.log(`Essas são as minhas comidas preferidas:
    ${comidasFavoritas[0]}
    ${comidasFavoritas[1]}
    ${comidasFavoritas[2]}
    ${comidasFavoritas[3]}
    ${comidasFavoritas[4]}`)

let perguntasDoDia = ["Você bebeu água hoje?", "Fez exercícios físicos?", "Foi produtivo?"]
let RespostasDoDia = [true, false, true]

console.log(perguntasDoDia[0], RespostasDoDia[0])
console.log(perguntasDoDia[1], RespostasDoDia[1])
console.log(perguntasDoDia[2], RespostasDoDia[2])













