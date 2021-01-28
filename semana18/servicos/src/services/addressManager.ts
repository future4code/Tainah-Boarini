
//--------------- Aqui eu vou pegar as infos da api
// -------------- npm i axios para importar a lib

import axios from "axios"
import { address } from "../types/address"

const URL =  "https://viacep.com.br/ws"

export const getAddresByCep = async (cep: string):Promise<address> => { //aqui ao inves de <string> ou <any> ou <void>, especifico a promessa de acordo com meu type address

    try { 

        const result = await axios.get(`${URL}/${cep}/json`)

        //----------- aqui vou precisar criar um arquivo para tipar as infos que vou precisar que sejam preenchidas. 
        const addressApi: address = {

            street: result.data.logradouro,
            neighbourhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }

        return addressApi

    } catch (error) {
        throw new Error(error.message)
    }

}