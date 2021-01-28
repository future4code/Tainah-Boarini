import { dataBase } from "../dataBase";
import { user } from "../types/user";

//------------------ querys que fazem a conexão com o banco de dados
export const insertUser = async (user: user) => {

    try {

        await dataBase.insert({ user }).into('cookenu_user')

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }

} 