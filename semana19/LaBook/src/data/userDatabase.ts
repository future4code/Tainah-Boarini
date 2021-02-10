import { user } from "../business/entities/user"
import { connection } from "./model/connection"

export const insertUser = async (
    user: user
) => {
    await connection
        .insert(user)
        .into("labook_users")
}


export const selectUserByEmail = async (
    email: string
): Promise<user> => {

    try {

        const result: any = await connection

            .select("*")
            .into("labook_users")
            .where({ email })

        return result[0]

    } catch (error) {

        throw new Error(error.slqMessage || error.message)
    }
}