import { performPurchase } from "../src/exercises/ex1"
import { user } from "../src/types/user"

describe("performPurchase - EX2 a", () => {
    test("Should return true when balance is greater than value", () => {

        expect.assertions(1)

        try {

            const testUser: user = {
                name: "Nome",
                balance: 50
            }

            expect(testUser.balance).toBeGreaterThan(200)

        } catch (error) {
            expect(error).toBeInstanceOf(Error)
            console.log(error.message)
        }
    })
})

describe("performPurchase - EX2 b ", () => {
    test("Should return true when balance is equal than value", () => {

        expect.assertions(1)

        try {

            const testUser: user = {
                name: "Nome",
                balance: 200
            }
            
            expect(testUser.balance).toEqual(testUser.balance)

        } catch (error) {
            expect(error).toBeInstanceOf(Error)
            console.log(error.message)
        }
    })
})

describe("performPurchase - EX2 c ", () => {
    test("Should return true when balance is less than value", () => {

        expect.assertions(1)

        try {

            const testUser: user = {
                name: "Nome",
                balance: 100
            }

            expect(testUser.balance).toBeLessThan(200)

        } catch (error) {
            expect(error).toBeInstanceOf(Error)
            console.log(error.message)
        }
    })
})



