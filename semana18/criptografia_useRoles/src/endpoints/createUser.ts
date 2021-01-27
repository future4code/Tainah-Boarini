import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generate } from "../service/idGenerator";
import { generateToken } from "../service/authenticator";
import { generateHash } from "../service/hashManager";
import { userInfo } from "os";
import { user } from "../types/user";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email ||
            !req.body.password

        ) {
            throw new Error('Preencha os campos "name","nickname" e "email"')
        }

        const cypherPassword: string = await generateHash(req.body.password)

        const id: string = generate();

        const { name, nickname, password, email, role } = req.body

        const userTest: user = {
            id,
            name,
            nickname,
            password: cypherPassword,
            email,
            role
        }

        await insertUser(userTest);

        const token = generateToken({ id, role: req.body.role });

        res
            .status(200)
            .send({ token });

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}