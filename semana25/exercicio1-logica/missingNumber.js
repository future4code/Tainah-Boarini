// ### Exercício do dia - Número Faltante

// Implemente uma função que receba um array (ordenado ou não) com números de 1 a 100. Você sabe que, nesse array, está faltando apenas **um** número dentro desse intervalo. A sua função deve retornar o número faltante. 
// Há dois exemplos abaixo com o array ordenado para facilitar o entendimento da questão. Entretanto, não assuma que ele esteja ordenado para implementar a função!

// - Para a entrada `[1, 2, 3, ... , 45, 46, 48, 49, ... , 100]`, o retorno deve ser `47`
// - Para a entrada `[1, 2, 3, ... , 69, 71, 72, ... , 100]`, o retorno deve ser `70`

// Além disso, faça, ao menos, **dois testes automatizados** da sua função.


export const findMissingNumber = (array) => {

    const expectedSum = 5050;
    let sum = 0;

    for (const num of arr) {
        sum += num;
    }
    return expectedSum - sum;
};

//-------------- testando outras possibilidades:

function compareNum(a, b) {
    return a - b;
}

const missingNum = (array) => {
    const orderArray = array.sort(compareNum);
    console.log("sort", orderArray);

    const missingNumber = [];

    for (let i = 0; i <= orderArray.length - 1; i++) {
        const nextElement = i + 1;

        if (orderArray[i] + 1 !== orderArray[nextElement]) {
            missingNumber.push(orderArray[i] + 1);
        } else {
            console.log("isn't missing number on array");
        }

        return missingNumber;
    }
};

console.log(missingNum([9, 30, 4, 6]));
