import { Request, Response } from "express";
import { businessCreatePost } from "../business/postBusiness";

export const createPost = async (req: Request, res: Response) => {

    try {
        let message = "Success!"

        const { photo, description, type } = req.body

        const token: string = req.headers.authorization as string

        await businessCreatePost(
            photo,
            description,
            type,
            token
        )


        res.status(201).send({ message })

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }

}

export const getPost = async (req: Request, res: Response) => {

    try {

        let message = "Success!"

        const { id } = req.params

        await 

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }
}
