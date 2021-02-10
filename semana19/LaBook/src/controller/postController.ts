import { Request, Response } from "express";
import { outputPost, post } from "../business/entities/post";
import { businessCreatePost, businessGetPostsById } from "../business/postBusiness";

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

export const getAllPosts = async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        const post: post = await businessGetPostsById(id)

        const result: outputPost = {
            photo: post.photo,
            description: post.description
        }

        res.status(200).send({ result })

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }
}
