import { userInfo } from "os";
import { dataBase } from "../dataBase";
import { user } from "../types/user";

//------------------ querys que fazem a conexão com o banco de dados
export const insertUser = async (newUser: user) => {

    try {

        await dataBase.insert({ 
            
            id: newUser.id,
            name: newUser.name, 
            email: newUser.email, 
            password: newUser.password, 
            role: newUser.role

         }).into('cookenu_users')

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }

} 