
import { Request, Response } from "express";
import {selectByName} from "../data/queryEndpoint"

//===================== EXERCÍCIO 1 ===========================================

export const getByNames = async(req: Request,res: Response): Promise<void> =>{
   try {
      const userName = req.query.name as string
      const users = await selectByName(userName)
      
      if(!userName.length){
         res.statusCode = 422
         throw new Error(`Digite um nome`)
      }

      if(!users.length){
         res.statusCode = 422
         throw new Error(`O nome "${userName}" não existe`)
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}