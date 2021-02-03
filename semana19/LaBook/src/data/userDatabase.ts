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

        const result: any = await connection("labook_users") // ---------- pergunta: pq se eu nao colocar any eu tenho que colocar return result[0]??
        
            .select("*")
            .where({ email })

        return result

    } catch (error) {

        throw new Error(error.slqMessage || error.message)
    }
}