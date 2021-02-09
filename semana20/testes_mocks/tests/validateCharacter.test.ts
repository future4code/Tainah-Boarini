import { validateCharacter } from "../src/validateCharacter"

describe("Testing validateCharacter", () => {

    test("Should return false for empty name input", () => {

        expect.assertions(1)

        const input = {
            name: "",
            life: 1500,
            defense: 50,
            strength: 60
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)

    })

    test("Should return false to life equal zero", () => {

        expect.assertions(1)

        const input = {
            name: "bananinha",
            life: 0,
            defense: 50,
            strength: 60
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)
        // expect(output).toEqual(0)

    })

    test("Should return false to defense equal zero", () => {

        expect.assertions(1)

        const input = {
            name: "bananinha",
            life: 1500,
            defense: 0,
            strength: 60
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)

    })

    test("Should return false to strenght equal zero", () => {

        expect.assertions(1)

        const input = {
            name: "bananinha",
            life: 1500,
            defense: 50,
            strength: 0
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)

    })

    test("Should return false to negative strenght, defense or life", () => {

        expect.assertions(1)

        const input = {
            name: "bananinha",
            life: -1500,
            defense: -50,
            strength: -10
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)

    })

    test("Should return true for all valid values", () => {

        expect.assertions(1)

        const input = {
            name: "bananinha",
            life: 1500,
            defense: 50,
            strength: 600
        }

        const output = validateCharacter(input)

        expect(output).toBe(true)

    })
})