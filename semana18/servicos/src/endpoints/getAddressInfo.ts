import { Request, Response } from "express"
import { getAddresByCep } from "../services/addressManager";

//---------------------aqui vai receber o cep digitado 


export const getAddressInfo = async (req: Request, res: Response) => {

    let errorCode: number = 400;
    
    try {

        const cep = req.params.cep

        if(!cep || isNaN(Number(cep || cep.includes("." || "-")))) {
            throw new Error ("cep inválido")
        }

        // ---------------- aqui, se o cep for válido, vai buscar no banco da api do viacep


        const resultAddress = await getAddresByCep(cep) // essa função leva pro service addressManager porque vai pegar uma informação externa 

        res.status(200).send(`Sucesso na verificação do cep: ${resultAddress}`)


    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }

}