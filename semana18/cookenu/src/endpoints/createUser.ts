import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { user } from "../types/user";
import { generateToken } from "../utils/authenticator";
import { hashPassword } from "../utils/hashPassword";
import { generate } from "../utils/idGenerator";

export const createAStudent = async (req: Request, res:Response) => {

    let errorCode: number = 400

    try {

        const { name, email, password, role } = req.body

        if(!name || !email || !password){
            errorCode = 406 
            throw new Error("preencha os campos obrigatórios de name, email e password corretamente")
        }

        if(email.includes("@")){
            errorCode = 405 
            throw new Error("verifique se o e-mail é valido e possui um @")
        } 

        if(password.length < 6) {
            errorCode = 411 
            throw new Error("A senha deve ter pelo menos 6 caracteres")
        }

        const id: string = generate()   
        const hashManager: string = hashPassword(password)   

        const newUser:user = {
            id: id,
            name: name,
            email: email,
            password: hashManager,
            role: role
        }

        await insertUser(newUser)
        const token = generateToken({id})

        res.status(200).send({"Seu token de acesso: ": token})


    } catch (error) {        
        res.status(errorCode).send(error.sqlMessage || error.message);
    };

}