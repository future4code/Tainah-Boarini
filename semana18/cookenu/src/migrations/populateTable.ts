import { dataBase } from "../dataBase";

const populateCookenuUsers = async (): Promise<void> => {

    try {
        await dataBase.raw(`
            INSERT INTO cookenu_users(id, name, email, password, role)
            VALUES   
            ('1', 'João', 'joao@email.com', '132456', 'APPRENTICE'),
            ('2', 'Maria', 'maria@email.com', '362252', 'CHEF');
            `);

        await dataBase.raw(`
            INSERT INTO recipes(id, title, descripton)
            VALUES   
            ('1', 'Suco verde da Bianca', 'Suco facilitador de aprendizado'),
            ('2', 'chickenitos', 'melhor comida');
            `);

        console.log("Tabela recipes e cookenu_users criadas com sucesso!")
        dataBase.destroy()

    } catch (error) {

        dataBase.destroy()
        throw new Error(error.sqlMessage || error.message)
    }
}

populateCookenuUsers()