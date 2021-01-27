import dataBase from "../config/dataBase"

const userTableName = "User"

export const insertUser = async (id: string, email: string, password: string): Promise<any> => {
    await dataBase
    .insert({
        id,
        email,
        password
    }) 
    .into(userTableName)
}


