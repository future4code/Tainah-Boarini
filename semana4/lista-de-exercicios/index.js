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
