
import { Request, Response } from "express";
import { selectByType } from "../data/queryEndpoint";

//===================== EXERCÍCIO 1 ===========================================

export const getByType = async(req: Request,res: Response): Promise<void> =>{
   try {
      const userType = req.params.type as string
      const users = await selectByType(userType)
      
    //   if(userType === ""){
    //      res.statusCode = 422
    //      throw new Error(`digite um type`)
    //   }

      if(!users.length){
         res.statusCode = 422
         throw new Error(`O tipo "${userType}" não foi encontrado`)
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

