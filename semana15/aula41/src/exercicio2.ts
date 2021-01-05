//a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
//as entradas são os parâmetros e as saídas são o return

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([10, 2, 5, -6, 23]))

//b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas 
//as variáveis de numerosOrdenados (tipagem: number), soma (tipagem: number)

//c. Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

type estatisticas = {
   maior: number,
   menor: number,
   media: number
}

type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => estatisticas
}

const calculo: amostraDeDados = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas //aqui poderia ser obterEstatisticas: bananinha (se bananinha fosse o nome da função lá em cima)
}

console.log("calculo", obterEstatisticas([21, 18, 65, 44, 15, 18]))