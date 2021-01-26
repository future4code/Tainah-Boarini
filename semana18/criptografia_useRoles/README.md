# Criptografia e User Roles

## Exercício 1
  
* a. O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?
  * `round é o tempo que o bcrypt leva para realizar a execução do algoritmo e salt são os caracteres aleatórios inseridos na senha (hashs) que geram uma combinação aleatória. Geralmente o padrão é 12 porque ele demora um pouco para gerar o algoritmo e assim evitar invasão de ataque de força bruta.` 

* b. Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs. 
  ```sh
  export async function generateHash(plainText: string):Promise<string> {

    const rounds = Number(process.env.BCRYPT_COST) 
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(plainText, salt)
    
    console.log("mensagem criptografada: ", result)
    return result
 
  ```

* c. Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs

```sh
  export const name = async (plainText:string, cypherText: string):Promise<boolean> => {
    
    return bcrypt.compare(plainText, cypherText)

}
```

## Exercício 2

* a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
  * cadastro. O login vai comparar as senhas inseridas no cadastro com as do banco de dados.


* d. No exercício de ontem, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.
  * sim, porque temos que fazer a validação de comparação de senha digitada com a criptografada.

   
---