import { Character } from "./interface"
import { validateCharacter } from "./validateCharacter"

// ------------------ função de validação diretamente na implementação

// export const performAttack = (attacker: Character, defender: Character) => {

//     try {
//         if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//             throw new Error("Invalid Character")
//         }

//         const defenderLifeResult = attacker.strength - defender.defense

//         if (attacker.strength > defender.defense) {
//             defenderLifeResult
//         }

//     } catch (error) {
//         return (error.message)
//     }

// }

// --------------------------- implementação de função utilizando inversão de dependências

export const performAttack = (attacker: Character, defender: Character, validatorCharacter: (input: Character) => boolean) => {

    try {
        if (!validatorCharacter(attacker) || !validatorCharacter(defender)) {
            throw new Error("Invalid Character")
        }

        const defenderLifeResult = attacker.strength - defender.defense

        if (attacker.strength > defender.defense) {
            defenderLifeResult
        }

    } catch (error) {
        return (error.message)
    }

}