//Esta pasta "controller" armazena os endpoints 

import { Request, Response } from "express";
import { generateToken } from "../utils/authenticator";
import { generate } from "../utils/idGenerator"
import { insertUser } from "../model/modelUser"

export const createUser = async (req: Request, res: Response): Promise<any> => {

    try {

        if (!req.body.email || !req.body.password) {
            throw new Error('Preencha os campos "email" e "password"')
        }

        if (req.body.email.indexOf("@") === -1 ) {
            throw new Error('Preencha o campo "email" corretamente')
        }

        if (req.body.password.length < 6 ) {
            throw new Error('Preencha o campo "senha" com, no mínimo, 6 caracteres')
        }

        const id: string = generate()

        await insertUser(
            id,
            req.body.email,
            req.body.password
        )

        const token = generateToken({id})

        res
            .status(200)
            .send({ token })

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }

}