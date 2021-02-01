import { Request, Response } from "express";
import { businessLogin, businessSignup } from "../business/userBusiness";

export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { email, password } = req.body

      const token = await businessLogin(email, password)

      res
      .status(201)
      .send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      if(error.message === "Cannot read property 'id' of undefined"){
         res.send("Email não compatível")
      }
      res.status(400).send(error.message)
   }
}

export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const { name, email, password, role } = req.body

      const token = await businessSignup(
         name,        
         email,
         password,
         role
      )

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error) {
      if(error.message === "Data truncated for column 'role' at row 1"){
         res.send("role deve estar como NORMAL ou ADMIN")
      }
      res.status(400).send(error.message).end()
   }

}