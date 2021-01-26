import { connection } from "../index";
import { user, USER_ROLES } from "../types/user";

export default async function insertUser(user: user) {
    
    await connection.insert({
        id: user.id,
        name: user.name,
        nickname: user.nickname,
        password: user.password,
        email: user.email,
        role: user.role

    }).into('to_do_list_users')
}