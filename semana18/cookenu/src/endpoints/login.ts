import { Request, Response } from "express";
import { loginInput, user } from "../types/user";
import {selectUserByEmail} from "../data/selectUserByEmail"
import { compareHash } from "../utils/hashPassword";
import { AuthenticationData } from "../types/authenticationData";
import { userInfo } from "os";
import { generateToken } from "../utils/authenticator";


export const login = async (req: Request, res: Response): Promise<void> => {

    let errorCode: number = 400;

    try {

        const { email, password } = req.body

        if(!email || !password){
            errorCode = 406 
            throw new Error("preencha os campos obrigatórios de email e password corretamente")
        }

        if(!email.includes("@")){
            errorCode = 405 
            throw new Error("verifique se o e-mail é valido e possui um @")
        } 

        const loginUser: user = await selectUserByEmail(email)

        if(!loginUser) {
            errorCode = 404
            throw new Error("Usuário não encontrado. Verifique o email")
        }

        const passwordIsCorrect: boolean = compareHash(password, loginUser.password)

        if(!passwordIsCorrect){
            errorCode = 401
            throw new Error("Senha incorreta")
        }

        const authorizationData: AuthenticationData = {id: loginUser.id, role: loginUser.id}

        const token = generateToken(authorizationData)

        res.status(200).send({token})


    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };
}