import { insertUser, selectUserByEmail } from "../data/userDatabase"
import { signupInputDTO, user } from "./entities/user"
import { generateToken } from "./services/authenticationData"
import { compare, hash } from "./services/hashManager"
import { generateId } from "./services/idGenerator"

export const businessSignup = async (
    input: signupInputDTO
) => {

    let statusCode: number

    if (
        !input.name ||
        !input.email ||
        !input.password
    ) {
        statusCode = 406
        throw new Error('"name", "email" and "password" must be provided')
    }

    const id: string = generateId()

    const cypherPassword = await hash(input.password);

    await insertUser({
        id,
        name: input.name,
        email: input.email,
        password: cypherPassword

    })

}

export const businessLogin = async (email: string,
    password: string) => {

    const queryResult = await selectUserByEmail(email)

    if (!email || !password) {
        res.statusCode = 406
        message = '"email" and "password" must be provided'
        throw new Error(message)
    }

    if (!queryResult) {
        res.statusCode = 401
        message = "Invalid credentials"
        throw new Error(message)
    }


    const passwordIsCorrect: boolean = await compare(password, queryResult.password)

    if (!passwordIsCorrect) {
        throw new Error("Invalid credentials")
    }

    const token: string = generateToken({
        id: queryResult.id
    })

    return token

}