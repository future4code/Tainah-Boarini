import { USER_ROLES } from "../../business/entities/user"

//--------Model troca informações com o banco de dados

export const convertStringToUserRole = (role: string): USER_ROLES => {
    if(role === "admin"){
        return USER_ROLES.ADMIN
    } else if(role === "normal"){
        return USER_ROLES.NORMAL
    }
    throw new Error("Role inválido. É necessário ser admin ou normal")
}