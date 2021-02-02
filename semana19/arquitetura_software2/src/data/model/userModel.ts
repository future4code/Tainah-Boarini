import { USER_ROLES } from "../../business/entities/user"

//--------Model troca informações com o banco de dados e serve como o tradutor entre o que chega de fora e envia para o banco e vice-versa

export const convertStringToUserRole = (role: string): USER_ROLES => {
    if(role === "admin"){
        return USER_ROLES.ADMIN
    } else if(role === "normal"){
        return USER_ROLES.NORMAL
    }
    throw new Error("Role inválido. É necessário ser admin ou normal")
}