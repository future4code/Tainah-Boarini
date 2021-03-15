// string do input: banana
// REMOVER 1 CARACTERE | banan = true
// ADICIONAR 1 CARACTERE | bananak = true
// SUBSTITUIR 1 CARACTERE | ranana = true
// mais de uma ação | bananaaa = false
// mais de uma ação | bnanak = false

const checkIfOneEdit = (inputA, inputB) => {

    if(inputA.length - inputB.length > 1) {
        return false
    } // garante que nao vai add mais que uma string e nem deletar mais que uma string

    if (inputA.length > inputB.length) return inputA.includes(inputB) //removi do B
    if (inputB.length > inputA.length) return inputB.includes(inputA) //adicionei no B

    
}

console.log(checkIfOneEdit("banana", "bananaa"))

// ADICIONAR 1 CARACTERE

// for (let item = 0; item < inputA.length; item++) {
//     if (inputA.length === inputB.length + 1) {
//         return true
//     } else {
//         return false
//     }
// }




// const checkIfOneEdit = (inputA: any, inputB: any): boolean => {

//     let hashInputA = {}
//     let hashInputB = {}

//     for (let i of inputA) {

//         if (hashInputA[i]) {
//             hashInputA[i] += 1
//         }
//         else {
//             hashInputA[i] = 1
//         }
//     }
//     console.log("hashInputA", hashInputA);

//     for (let i of inputB) {

//         if (hashInputB[i]) {
//             hashInputB[i] += 1
//         }
//         else {
//             hashInputB[i] = 1
//         }
//     }
//     console.log("hashInputB",hashInputB);

//     for (let key in hashInputA) {
//         // if (hashInputA[key] > hashInputB[key]) {
//         //     return true
//         // } //Deletando

//         if (hashInputA !== hashInputB) {
//             return false;
//         }
//     }

//     return true

// }


// ----------------------

// for (let item = 0; item < inputA.length; item++) {
        
//     if (inputA.length - 1 === inputB.length) {
//         return true

//     } else if
//     (inputA.length === inputB.length + 1) {
//         return true
        
//     } else {
//         return false
//     }
// }
// }
