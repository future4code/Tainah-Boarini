export enum USER_ROLES {
    APPRENTICE = "APPRENTICE",
    CHEF = "CHEF"
}

export type user = {
    id: string,
    name: string, 
    email: string, 
    password: string, 
    role: USER_ROLES
}

export type recipes = {
    id: string,
    title: string,
    descripton: string
}