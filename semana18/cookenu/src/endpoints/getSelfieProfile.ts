import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { AuthenticationData } from "../types/authenticationData";
import { user } from "../types/user";
import {  getTokenData } from "../utils/authenticator";

export const getSelfieProfile = async (req: Request, res: Response) => {

    let errorCode: number = 400

    try {

        //------------ diálogo com o postman (onde eu terei que copiar o token do login e colocar no Headres junto com a key authorization):
        const token = req.headers.authorization!

        if (!token) {
            errorCode = 406
            throw new Error("verifique o token")
        }

        const tokenIsCorrect: AuthenticationData = getTokenData(token)

        const loginUser: user = await selectUserById(tokenIsCorrect.id)


        res.status(200).send({ id: loginUser.id, name: loginUser.name, email: loginUser.email })


    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };

}