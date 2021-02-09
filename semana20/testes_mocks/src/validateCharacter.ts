import { Character } from "./interface";

export const validateCharacter = (input: Character) => {

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
        input.name === ""
    ) {
        return false
    }

    return true

}