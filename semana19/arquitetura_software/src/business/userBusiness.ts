import { compare, hash } from "./services/hashManager";
import { insertUser, selectAllUsers, selectUserByEmail } from "../data/userDatabase";
import { generateToken, getTokenData } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { authenticationData, user, USER_ROLES } from "./entities/user";

export const businessSignup = async (
   name: string,
   email: string,
   password: string,
   role: USER_ROLES
) => {

   if (
      !name ||
      !email ||
      !password ||
      !role

   ) {
      throw new Error('Preencha os campos "name", "email", "password" e role')
   }

   if(email.indexOf("@")=== -1){
      throw new Error ("Email inválido")
   }

   if(password.length < 6){
      throw new Error ("A senha deve ter, no mínimo, 6 caracteres")
   }


   const id: string = generateId()

   const cypherPassword = await hash(password);

   await insertUser({
      id,
      name,
      email,
      password: cypherPassword,
      role
   })

   const token: string = generateToken({
      id,
      role: role
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

   if(email.indexOf("@")=== -1){
      throw new Error("Email incorreto")
   }

   if(password.length < 6){
      throw new Error("A senha deve ter, no mínimo, 6 caracteres")
   }

   const user: user = await selectUserByEmail(email)

   const role = user.role

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

   return ({token, role})
}
export const businessGetAllUsers = async (
  token: string,

) => {

   if (!token) {
      throw new Error("Acesso não autorizado. Verifique seu token")
   }

   const verifyToken: authenticationData = getTokenData(token)

   if(!verifyToken){
      throw new Error("Usuário não autorizado. Token inválido")
   }

   const getAllUsers = await selectAllUsers()
   
   return (getAllUsers)
}