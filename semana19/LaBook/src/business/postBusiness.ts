import { insertPost, selectPostById } from "../data/postDatabase";
import { post, POST_TYPES } from "./entities/post";
import { authenticationData } from "./entities/user";
import { getTokenData } from "./services/authenticationData";
import { generateId } from "./services/idGenerator";

export const businessCreatePost = async (photo: string , description: string, type: POST_TYPES, token: string )  => {

    if(!photo || !description || !type){
        throw new Error("Please, complete your post with photo, description and type")
    }

    const postId: string = generateId()
    
    const createdAt = new Date() 
    const tokenData: authenticationData = getTokenData(token)
    const author_id = tokenData.id

    await insertPost({
        id: postId,
        photo,
        description,
        type,
        created_at: createdAt,
        author_id
    })
}

export const businessGetPostsById = async (id: string) => {


    if(!id){
        throw new Error("verify id")
    }

    const post: post = await selectPostById(id)

    if (!post){
        throw new Error("Post not found")
    }

    return post
}