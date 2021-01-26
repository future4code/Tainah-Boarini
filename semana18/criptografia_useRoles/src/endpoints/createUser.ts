import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generate } from "../service/idGenerator";
import { generateToken } from "../service/authenticator";
import { generateHash } from "../service/hashManager";

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

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            cypherPassword,
            req.body.email
        );

        const token = generateToken(id);

        res
            .status(200)
            .send({token});

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}