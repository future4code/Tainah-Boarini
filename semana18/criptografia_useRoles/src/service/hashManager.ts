import * as bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export async function generateHash(plainText: string):Promise<string> {

    const rounds = Number(process.env.BCRYPT_COST) 
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(plainText, salt)
    
    console.log("mensagem criptografada: ", result)
    return result
    
}

// ------- verifica se o plainText é correspondente ao hash do generateHash -------

export const compare = async (plainText:string, cypherText: string):Promise<boolean> => {
    
    return bcrypt.compare(plainText, cypherText)

}
