
import { Request, Response } from "express";
import { selectByOrder } from "../data/queryEndpoint"
import { searchInput } from "../types/searchInput";

//===================== EXERCÍCIO 2 ===========================================

export const getByOrder = async (req: Request, res: Response): Promise<void> => {
   try {
      const { userName, userType } = req.query as searchInput
      const users = await selectByOrder(userName, userType)

      // if (!["userName", "userType"].includes(users)) {
      //    res.statusCode = 422
      //    throw new Error(`Valores válidos para "getByOrder" são "userName" e "userType`)
      // }

      if (!userName.length) {
         res.statusCode = 422
         throw new Error(`Informe um nome`)
      }
      
      if (!users.length) {
         res.statusCode = 422
         throw new Error(`O nome "${userName}" não foi encontrado`)
      }

      res.status(200).send(users)

   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}