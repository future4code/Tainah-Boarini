// ------------------- aqui eu insiro no meu banco de dados as informações colhidas do usuário para descobrir o cep

import { connection } from "..";

export async function createUserAddressTable(): Promise<void> {

    try {

        await connection.raw(`
        CREATE TABLE UserAddress(
            id VARCHAR(255) PRIMARY KEY NOT NULL, 
            street VARCHAR(255) NOT NULL,
            complement INT,
            neighbourhood VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            state VARCHAR(255) NOT NULL,
            users_id VARCHAR(255) NULL,
            FOREIGN KEY (to_do_list_users_id) REFERENCES to_do_list_users(id)
            )
        `)

        console.log(`Tabela criada com sucesso!`)

        connection.destroy()
   

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }

}

createUserAddressTable()