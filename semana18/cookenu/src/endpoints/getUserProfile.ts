import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { user } from "../types/user";
import { getTokenData } from "../utils/authenticator";

export const getUserProfile = async (req: Request, res: Response) => {

    let errorCode: number = 400

    try {

        //------------ diálogo com o postman (onde eu terei que copiar o token do login e colocar no Headres junto com a key authorization):
        const getUserId = req.params.id!

        if (!getUserId) {
            errorCode = 406
            throw new Error("preencha o id do usuário")
        }

        const token = req.headers.authorization as string
        const authData = getTokenData(token)
        const userId: user = await selectUserById(authData.id)

        if (!userId) {
            errorCode = 404
            throw new Error("Id incorreto. Verifique o id do usuário")
        }

        res.status(200).send(userId)


    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };

}