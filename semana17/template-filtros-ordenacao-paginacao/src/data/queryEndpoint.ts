import { connection } from ".."

//===================== EXERCÍCIO 1 ===========================================

export async function selectByName(userName: string):Promise<any> {
   
    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
       WHERE name LIKE "%${userName}%";
    `)
 
    return result[0]
 }

export async function selectByType(userType: string):Promise<any> {
   
    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
       WHERE type LIKE "%${userType}%";
    `)
 
    return result[0]
 }
 
export async function selectByOrder(userName: string, userType: string):Promise<any> {
   
    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
       WHERE name LIKE "${userName}%"
       ORDER BY "${userType}";
    `)
 
    return result[0]
 }

export async function selectLimit(userName: string, resultsPerPage: string):Promise<any> {
   
    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
       LIMIT "${resultsPerPage}"
       OFFSET ;
    `)
 
    return result[0]
 }