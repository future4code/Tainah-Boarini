import { Character } from "./interface";

export const validateCharacter = (input: Character) => {


    const lifeResult = input.strength - input.defense

    const character = {
        name: input.name,
        life: input.life,
        defense: lifeResult,
        strength: input.strength
    }

    const updateCharacter = { ...character }


    if (lifeResult <= 0
        || input.life <= 0
        || input.defense <= 0
        || input.strength <= 0
    ) {
        return false
    }

    if (
        lifeResult === undefined ||
        input.life === undefined ||
        input.defense === undefined ||
        input.strength === undefined ||
        input.name === undefined
    ) {
        return false
    }

    return updateCharacter

}