
//A pasta migrations é a mesma coisa que a pasta "data" só que com outro nome. Ela é responsável pela criação da tabela de usuários no banco de dados

import dataBase from "../config/dataBase"

const createUsersTable = async():Promise<void> => {
    try {

        await dataBase.raw(`
            CREATE TABLE User
            id VARCHAR(255) PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        `)

        console.log("Tabela criada com sucesso!")

        dataBase.destroy()

    } catch (error){
        throw new Error(error.sqlMessage || error.message)
    }
}

createUsersTable()