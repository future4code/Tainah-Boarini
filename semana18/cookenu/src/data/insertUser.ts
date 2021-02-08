import { userInfo } from "os";
import { dataBase } from "../dataBase";
import { user } from "../types/user";

//------------------ querys que fazem a conexão com o banco de dados
export const insertUser = async (newUser: user) => {

    try {

        await dataBase.insert(newUser).into('cookenu_users')

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }

} 