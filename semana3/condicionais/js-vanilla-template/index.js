//CONDICIONAIS

//EXERCÍCIO 1 <<=====================

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
//   //Se o número que o usuário digitou, dividido por 2, der o resultado 0, então ele "Passou no teste."
// } else {
//   console.log("Não passou no teste.")
//Se o número que o usuário digitou, dividido por 2, der o resultado diferente de 0, então ele "Não passou no teste."

//esse código serve para verificar se o número digitado é par ou ímpar. Sendo o número ímpar aquele que não vai passar no teste.

//EXERCÍCIO 2 <<=====================

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a. O código serve para referenciar um preço específico para cada fruta que o usuário digitar no prompt
//b. 2.25
//c. Apareceria a mensagem do preço referente à Pêra (5.5) e o preço do default(5)


//EXERCÍCIO 3 <<=====================

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a. A primeira linha está transformando o "spring" digitado pelo usuário em "number"
//b. Digitando 10 >> "Esse número passou no teste" | Digitando -10 >> não aparece nada
//c. Haverá erro no console porque o console.log(mensagem) está fora do bloco e não tem nenhuma variável referente a ele no escopo.


//EXERCÍCIO 4 <<=====================

// const idade = Number(prompt("Qual a sua idade?"))

// if (idade >= 18){
//   console.log("Ahh muleque, pode dirigir!")
// }else {
//   console.log("Não pode dirigir nãooo!")
// }

//EXERCÍCIO 5 <<=====================

// const turno = prompt("Qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

// if (turno === "M") {
//   console.log("Bundinha!")

//   } else if (turno === "V") {
//     console.log("Booooa tarde!")

//   } else {
//     console.log("Boa noiteee! Acorda =p")
//   }

//EXERCÍCIO 6 <<=====================

// const turno = prompt("Qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

// switch (turno) {
//    case "M":
//     console.log("Bundinha!")
//     break;

//    case "V":
//     console.log("Booooa tarde!")
//     break;

//     case "N":
//     console.log("Boa noiteee! Acorda =p")
//     break;
//   }

//EXERCÍCIO 7 <<=====================

// const filme = prompt("Que gênero de filme você deseja assistir?").toLowerCase()
// const preco = Number(prompt("Digite somente o valor em número que deseja pagar para assistir ao gênero desejado"))

// if (filme === "fantasia" && preco < 15) {
//   console.log("Bom filme!!!")

// } else {
//   console.log("Escolha outro filme =(")
// }

//DESAFIO 1 <<=====================

// const filme = prompt("Que gênero de filme você deseja assistir?").toLowerCase()
// const preco = Number(prompt("Digite somente o valor em número que deseja pagar para assistir ao gênero desejado"))

// if (filme === "fantasia" && preco < 15) {  
//   const snack = prompt("Qual snack você vai comprar? Pipoca, chocolate, doces, outros?")
//   const snackEscolhido = []  
  
//   snackEscolhido.push(snack)
//   console.log(`Bom filme e aproveite seu ${snackEscolhido}!!`)

// } else {
//   console.log("Escolha outro filme =(")
// }

//DESAFIO 2 <<=====================

// const nomeCompleto = prompt("Digite seu nome completo:").toUpperCase()
// const tipoDeJogo = prompt("Qual jogo deseja ver? Digite IN para jogo internacional ou DO para doméstico.").toUpperCase()

// switch (tipoDeJogo === "DO"){
//     const etapaDoJogo = prompt("Qual etapa do jogo você vai assistir? Digite SF para semi-final; DT para decisão de terceiro lugar; e FI para final").toUpperCase()
//     const categoria = (prompt("Qual categoria? 1, 2, 3 ou 4?"))
//     const qtdIngressos = Number(prompt("Quantos ingressos você precisa?"))

//     const cat1SF = 1320
//     const cat1DT = 660
//     const cat1FI = 1980

//     const cat2SF = 880  
//     const cat2DT = 440
//     const cat2FI = 1320

//     const cat3SF = 550  
//     const cat3DT = 330
//     const cat3FI = 880

//     const cat4SF = 220  
//     const cat4DT = 170
//     const cat4FI = 330

//     const dolar = 4.10


// }