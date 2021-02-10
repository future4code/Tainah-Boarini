import { post } from "../business/entities/post"
import { connection } from "./model/connection"

export const insertPost = async (
    post: post
) => {
    await connection("labook_posts")
        .insert(post)
}


export const selectPostById = async (
    id: string
): Promise<post> => {

    try {

        const result: any = await connection
            .select("*")
            .into("labook_posts")
            .where({ id })

        return result[0]

    } catch (error) {

        throw new Error(error.slqMessage || error.message)
    }
}