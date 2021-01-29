import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types/authenticationData";


//----------------payload sao as infos que eu quero guardar
export const generateToken = (
    payload: AuthenticationData
): string => {

    const token: string = jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {expiresIn: process.env.JWT_EXPIRE_TIME}
    );

    return token;
};

export const getData = (token: string): AuthenticationData => {
    const { id, role } = jwt.verify(token, process.env.JWT_KEY!) as AuthenticationData;

    return { id, role };
};