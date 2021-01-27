//A pasta "utils" é a mesma que service. Aqui ela vai gerar arquivos que podem ser usados durante toda a aplicação

import * as jwt from "jsonwebtoken"

const expiresIn = "1min"

export const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
        { id: input.id },
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME as string || expiresIn }
    );
    return token
}

type AuthenticationData = {
    id: string;
}