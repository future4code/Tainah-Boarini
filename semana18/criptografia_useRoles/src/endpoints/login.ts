import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { generateToken } from "../service/authenticator";


export async function login(req: Request, res: Response) {

    try {

        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        }

        if (!input.email || !input.password) {
            throw new Error("Preencha o e-mail e senha corretamente!");
        }

        const user = await getUserByEmail(input.email);

        if (!user) {
            throw new Error("User not found!");
        }

        const comparePassword: boolean = await compare(input.password, user.password)

        if(!comparePassword){
            throw new Error("Senha inválida")
        }


        const token = generateToken(user.id);
        res.status(200).send({ token });

    } catch (error) {
        res.status(400).send({ message: error.message });
    }


}

export type loginInput = {
    email: string,
    password: string
}