import { UserBusiness } from "../src/business/UserBusiness"
import hashGenerator from "../src/services/hashGenerator";
import { IdGenerator } from "../src/services/idGenerator";
import tokenGenerator from "../src/services/tokenGenerator";


describe("Testing getUserById Business", () => {

    const idGenerator = { generate: jest.fn(() => "bananinha") } as IdGenerator;

    const userDatabase = { getUserById: jest.fn(async (id: string) => undefined) } as any;

    const userBusiness = new UserBusiness(
        idGenerator,
        hashGenerator,
        userDatabase,
        tokenGenerator
    );

    test("Should be return true when Not found id", async () => {

        expect.assertions(2)

        try {
            await userBusiness.profile("chuchu")

        } catch (error) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toEqual("Not found id")
        }

    })

}) 