import { Character } from "./interface";

export const validateCharacter = (input: Character) => {

    if (
        input.life <= 0 || 
        input.defense <= 0 || 
        input.strength <= 0
    ) {
        return false
    }

    if (
        input.life === undefined ||
        input.defense === undefined ||
        input.strength === undefined ||
        input.name === ""
    ) {
        return false
    }

    return true

}