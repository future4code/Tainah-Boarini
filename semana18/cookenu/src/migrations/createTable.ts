import { dataBase } from "../dataBase"

const createTable = async (): Promise<void> => {

    try {

        await dataBase.raw(`
            CREATE TABLE cookenu_users (
            id VARCHAR(64) PRIMARY KEY NOT NULL,
            name VARCHAR(64) NOT NULL,
            email VARCHAR(64) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            role ENUM('APPRENTICE','CHEF') DEFAULT 'APPRENTICE' 
            )`)

        await dataBase.raw(`
            CREATE TABLE recipes (
            id VARCHAR(64) PRIMARY KEY  NOT NULL,
            title VARCHAR(64) NOT NULL,
            descripton TEXT NOT NULL,
            date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
            )`)


    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }

    console.log("tables created successfully")

    dataBase.destroy()

}

createTable()
