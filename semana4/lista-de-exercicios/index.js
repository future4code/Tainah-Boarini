//------------------------------------------------------------------------------------------------------------------Exercícios de interpretação de código ---------------------------------------------------------------------------------------

//Analise os trechos de código em cada exercício e escreva o que ele faz, como faz e qual será o valor impresso no console. --------------------------------------------------------------------------------

//1. -----------  A função nomeada pede na caixa de prompt para informar um valor da cotação em dólar. Esse valor será armazenado na variável 'cotacao'. Em seguida terá um saída representada pelo 'return' que guardará
// o resultado da multiplicação feito entre o parâmetro 'valorEmDolar' e a variavel da função 'cotacao'. Após executar a função, haverá uma nova variável 'meuDinheiro' que chamará a função conversorDeMoeda substituindo o parametro pelo número 100.
//O console log irá imprimir portanto >> R$ 100*cotacao (que dependerá do valor incluso no prompt)

//2. ----------- A função nomeada (investeDinheiro) possui dois parâmetros: 'tipoDeInvestimento' e 'valor'. Dentro da função há uma variável 'valorAposInvestimento' que será aberta nas condições do switch case logo abixo.
// caso o primeiro parâmetro (tipoDeInvestimento) tenha a string 'Poupança', então a variável valorAposInvestimento será igual ao segundo parâmetro (valor) multiplicado por 1.03
// caso o primeiro parâmetro (tipoDeInvestimento) tenha a string 'Renda Fixa', então a variável valorAposInvestimento será igual ao segundo parâmetro (valor) multiplicado por 1.05
// caso o primeiro parâmetro (tipoDeInvestimento) tenha a string 'CDB', então a variável valorAposInvestimento será igual ao segundo parâmetro (valor) multiplicado por 1.06
// caso o primeiro parâmetro (tipoDeInvestimento) tenha a string 'Ações', então a variável valorAposInvestimento será igual ao segundo parâmetro (valor) multiplicado por 1.1
// caso o primeiro parâmetro (tipoDeInvestimento) tenha qualquer string não mencionada anteriormente, abrirá um alerta "TIPO E INVESTIMENTO INFORMADO INCORRETO!"
// Esses comandos de switch case serão guardados no return da função 'investeDinheiro' na variável contida nela: 'valorAposInvestimento'
// Em seguida, fora da função, há a variável 'novoMontante' que ativará a função acima substituindo os parâmetros 'tipoDeInvestimento' e 'valor' por 'Ações e '150'. 
// Na variável abaixo, 'segundoMontante', será ativada a função acima substituindo os parâmetros 'tipoDeInvestimento' e 'valor' por 'Tesouro Direto e '200'. 
// No console.log do novoMontante aparecerá o resultado de 150*1.1 >> 165
// No console.log do segundoMontante aparecerá o resultado "TIPO E INVESTIMENTO INFORMADO INCORRETO!" 

//3. ----------- Aqui temos 3 variaveis. A primeira é uma array de números e as outras duas estão, a princípio, com arrays vazias.
// Em seguida há um loop For Of que vai percorrer todos os elementos da array da vaiável 'numeros' e as condições para inserir os elementos da array 'numeros' nas arrays das variáveis 'array1' e 'array2' é:
// se o elemento for dividido por dois e o resto for zero (elemento par), então insira (push) esse elemento (numero) na array da variavel array1
// Caso contrário (else) insira (push) esse elemento (numero) na variavel da array 2.
// Após o loop, o primeiro console irá imprimir >> "Quantidade total de números, 'elemento.length'(quantidade de elementos dentro da array)"
// no segundo console, irá imprimir a quantidade de elementos contidos na array da variável array1 (ou seja, quantidade de números pares)
// no terceiro console, irá imprimir a quantidade de elementos contidos na array da variável array2 (ou seja, quantidade de elementos diferentes de pares)


//4. ----------- Aqui temos 3 variaveis. A primeira é uma array de números, a variável 'numero1' equivale a quantidade infinito e a variável 'numero2' equivale a zero.
// Em seguida vai rodar um loop dentro da array da variável 'numeros' com duas condições true (representadas pelo 'if')
// A primeira condição é para determinar o menor valor do array da variável 'numeros', uma vez que sempre o numero menor substituirá o numero maior.
// A segunda condição é para determinar o maior valor do array da variável 'numeros', uma vez que sempre o numero maior substituirá o numero menor.
// o console.log do número1 irá imprimir portanto, o número -10 e o console.log do número2 irá imprimir 1590.


//------------------------------------------------------------------------------------------------------------------ Exercícios de Lógica de Programação ---------------------------------------------------------------------------------------

//1. É possível iterar uma array utilizando a propriedade loop como 'for of', 'while', 'for'. Por exemplo:

//FOR

// const sacolaCompras = ["bananinha", "nescau", "alcool", "agua"]

//     for(let indice = 0; indice < sacolaCompras.length; indice ++) {
//         const itemEscolhido = sacolaCompras[indice]
//         console.log(itemEscolhido)
//     }


//2. Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2 ===> true
// const booleano4 = !booleano3  ====> false

// a) `booleano1 && booleano2 && !booleano4` ======> true && false && true ======> Resultado final: false

// b) `(booleano1 && booleano2) || !booleano3` ======> (true && false) || false ======> Resultado final: false

// c)  `(booleano2 || booleano3) && (booleano4 || booleano1)` =====> (false || true) && (false || true) ======> Resultado final: true

// d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)` =====> !(false || true) || !(true || true) ======> !(true) || !(true) ======> (false) || (false) ======> Resultado final: false

// e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)` =====> !(true) && !(true) || (!false && true && true) ======> (false) && (false) || (true && true && true) ======> Resultado final: true


//3. Você tem que escrever um código que, dado um número N, ele imprima (no console) os N primeiros números pares (por exemplo, se N for 3, você deve imprimir 0, 2 e 4; se N for 5, deve imprimir 0, 2, 4, 6 e 8).
// Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:

// const quantidadeDeNumerosPares
// let i = 0
// while(i <= quantidadeDeNumerosPares) {
//   console.log(i*2)
// }

//Este código funciona? Por quê? Caso não funcione, corrija a implementação dele.
//Não funciona porque faltou a soma de + 1 número da variavel 'i' pra que o loop consiga ser completado. E também um número (ou um conjunto de números) na variável 'quantidadeDeNumerosPares' para que a variável i chegue até o número menor ou igual 
//da variável 'quantidadeDeNumerosPares'. Por exemplo:

const quantidadeDeNumerosPares = 10
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}

//no final aparecerá o resultado de 11 números menores ou igual a 10 multiplicados por 2

