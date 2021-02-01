import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { AuthenticationData } from "../types/authenticationData";
import { recipes, user } from "../types/user";
import { generateToken, getTokenData } from "../utils/authenticator";
import { hashPassword } from "../utils/hashPassword";
import { generate } from "../utils/idGenerator";

export const createRecipe = async (req: Request, res:Response) => {

    let errorCode: number = 400

    try {

        const { title, description } = req.body

        if(!title || !description){
            errorCode = 406 
            throw new Error("preencha os campos obrigatórios de title e description corretamente")
        }


        const token = req.headers.authorization!
        const tokenIsCorrect: AuthenticationData = getTokenData(token)

        if(!tokenIsCorrect){
            errorCode = 404
            throw new Error("verifique se o token é o mesmo do usuário")
        }

        const newRecipe:recipes = {
            id,
            title: title,
            description: description
        }

        await insertRecipe(newRecipe)

        res.status(200).send({"Receita inserida: ": newRecipe})


    } catch (error) {        
        if(error.message.includes("Data truncated for column 'role' at row 1")){
            res.send("role deve ser 'APPRENTICE' ou 'CHEF'")
        }
        res.status(errorCode).send(error.sqlMessage || error.message);
    };

}