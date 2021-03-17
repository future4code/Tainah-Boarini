// const integerNumber = (input: number) => {
//     if (input >= 0) {
//         integerNumber(input - 1)
//         console.log(input)
//     }
// }
// integerNumber(5)
//---------------------------------------------------------
// const integerNumberInverte = (input: number) => {
//     if (input >= 0) {
//         console.log(input)
//         integerNumberInverte(input - 1)
//     }
// }
// integerNumberInverte(5)
//---------------------------------------------------------
//Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a **n**
// export const calculateSumTo = (n: number, acc: number = 0): number => {
//     if (n === 0) {
//         return acc;
//     }
//     return calculateSumTo(n - 1, acc + n);
// };
// console.log(calculateSumTo(3));
var fatorial = function (n) {
    if (n < 2) {
        return 1;
    }
    return n * fatorial(n - 1);
};
console.log(fatorial(3));
