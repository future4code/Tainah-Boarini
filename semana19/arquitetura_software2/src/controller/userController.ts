import { Request, Response } from "express";
import { signupInputDTO } from "../business/entities/user";
import { businessLogin, businessSignup } from "../business/userBusiness";

export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { email, password } = req.body

      const token = await businessLogin(email, password)

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}
export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const input = 
      {
       name: req.body.name, 
       nickname: req.body.nickname, 
       email: req.body.email, 
       password: req.body.password, 
       role: req.body.role 
      }
       
      const token = await businessSignup(input) 

//------ É possível substituir a linha 28 a 37 por: 
//------ const token = await businessSignup(req.body as Omit<user, "id">) 

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error) {
      res.status(400).send(error.message)
   }
}