import { compare, hash } from "./services/hashManager";
import { insertUser, selectUserByEmail } from "../data/userDatabase";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import {  user } from "./entities/user";
import { convertStringToUserRole } from "../data/model/userModel";

export const businessSignup = async (
   input: Omit<user, "id"> //use utility types ---> ele pega o types do user e omito o "id" que ele carrega. Tbm poderia usar o signupInputDTO aqui.
) => {

   if (
      !input.name ||
      !input.nickname ||
      !input.email ||
      !input.password ||
      !input.role
   ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
   }

   const id: string = generateId()

   const cypherPassword = await hash(input.password);

   const user = {
      id,
      name: input.name,
      nickname: input.nickname,
      email: input.email,
      password: cypherPassword,
      role: convertStringToUserRole(input.role) //aqui vai usar a função de converter as strings "normal" e "admin" em USER_ROLES "NORMAL" e "ADMIN"
   }

   await insertUser(user)

   const token: string = generateToken({
      id,
      role: convertStringToUserRole(input.role)
   })

   return token
}

export const businessLogin = async (
   email: string,
   password: string
) => {
   if (!email || !password) {
      throw new Error("'email' e 'senha' são obrigatórios")
   }

   const user: user = await selectUserByEmail(email)

   if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const passwordIsCorrect: boolean = await compare(password, user.password)

   if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const token: string = generateToken({
      id: user.id,
      role: user.role
   })

   return token
}