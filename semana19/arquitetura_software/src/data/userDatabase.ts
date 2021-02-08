import { connection } from "./connection"
import { user } from "../business/entities/user"


export const insertUser = async(
   user: user
):Promise<void> => {

   try{
      await connection.insert({ 
         id: user.id,
         name: user.name,
         email: user.email,
         password: user.password,
         role: user.role

      }).into('to_do_list_users')
   } catch (error) {
      throw new Error(error.sqlMessage || error.message);
   }
}

export const selectUserByEmail = async (
   email: string
): Promise<user> => {
   try {
      const result = await connection("to_do_list_users")
         .select("*")
         .where({ email })

      return {
         id: result[0].id,
         name: result[0].name,
         email: result[0].email,
         password: result[0].password,
         role: result[0].role
      }

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}

export const selectAllUsers = async (): Promise<any> => {
   try {

      // const users: any = []
      
      const result = await connection("to_do_list_users")
         .select("*")
         .from("to_do_list_users")

         // for(let user of result){
         //    users.push(user)
         // }

      return result 

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}