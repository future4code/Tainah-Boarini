import { dataBase } from "../dataBase";
import { recipes } from "../types/user";

//------------------ querys que fazem a conexão com o banco de dados
export const insertRecipe = async (newRecipe: recipes) => {

    try {

        await dataBase.insert(newRecipe).into('recipes')

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }

} 