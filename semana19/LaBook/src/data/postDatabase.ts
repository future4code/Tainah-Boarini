import { post } from "../business/entities/post"
import { user } from "../business/entities/user"
import { connection } from "./model/connection"

export const insertPost = async (
    post: post
) => {
    await connection("labook_posts")
         .insert({post})
}


export const selectPostById = async (
    id: string
): Promise<post> => {

    try {

        const result: any = await connection("labook_posts")
        .select("*")
        .where({ id })

        return result

    } catch (error) {

        throw new Error(error.slqMessage || error.message)
    }
}