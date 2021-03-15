// string do input: banana
// REMOVER 1 CARACTERE | banan = true
// ADICIONAR 1 CARACTERE | bananak = true
// SUBSTITUIR 1 CARACTERE | ranana = true
// mais de uma ação | bananaaa = false
// mais de uma ação | bnanak = false
const checkIfOneEdit = (inputA, inputB) => {
    if (Math.abs(inputA.length - inputB.length) > 1) {
        return false;
    } // garante que nao vai add mais que uma string e nem deletar mais que uma string
    if (inputA.length > inputB.length) {
        return inputA.includes(inputB); //remover 1 letra do B, o input A deve conter o B
    }
    if (inputB.length > inputA.length) {
        return inputB.includes(inputA); //adicionar 1 letra do B, o input B deve conter o A
    }
    let charDifferent = 0;
    for (let i = 0; i < inputA.length; i++) {
        if (inputA[i] !== inputB[i])
            return charDifferent++;
    } // se os inputs forem diferentes, só pode ter uma letra de diferença
    return charDifferent === 1;
};
console.log(checkIfOneEdit("banana", "bananaa"));
