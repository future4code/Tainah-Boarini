import { dataBase } from "../dataBase";

//------------------ querys que fazem a conexão com o banco de dados
export const selectUserById = async (id: string): Promise<any> => {

    try {

        const result = await dataBase
            .select("*")
            .from("cookenu_users")
            .where({ id })

            return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }

} 