# Introdução a Autenticação

```sh
```
## Exercício 1

* a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
    * `As strings possuem uma validação mais segura porque podem mesclar números e letras.` 

* A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 
    * `export function generate(): string {
    return v4()
}` 

---

## Exercício 2

* a. Explique o código abaixo com as suas palavras:
```sh
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```
* `O knex é o que vai fazer a conexão com o banco de dados a partir da porta 3306. A const CreateUser é a promise que vai inserir os dados do usuário como 'id', 'email' e ''password' na tabela 'userTableName'`

* b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

```sh
await dataBase.raw(`
            CREATE TABLE Users
            id VARCHAR(255) PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        `)
```

* Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.

```sh
const userTableName = "User"

export const createUser = async (id: string, email: string, password: string) => {
    await dataBase
    .insert({
        id,
        email,
        password
    }) 
    .into(userTableName)
}
```
## Exercício 3

* a. O que a linha `as string` faz? Por que precisamos usar ela ali?
    * `Ela garante que a minha Key venha como string fazendo com que toda minha função "generateToken" retorne uma string, uma vez que o id e o "expiresIn" também são strings`

* b. Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.
    ```sh
    import * as jwt from "jsonwebtoken"

const expiresIn = "1min"

export const generateToken = (id: string): string => {
    const token = jwt.sign(
        { id },
        process.env.JWT_KEY as string,
        { expiresIn }
    );
    return token
}
    ```
## Exercício 4

* a. Crie o endpoint que realize isso, com as funções que você implementou anteriormente
* b. Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um "@"
* c. Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais

```sh
export const createUser = async (req: Request, res: Response): Promise<any> => {

    try {

        if (!req.body.email || !req.body.password) {
            throw new Error('Preencha os campos "email" e "password"')
        }

        if (req.body.email.indexOf("@") === -1 ) {
            throw new Error('Preencha o campo "email" corretamente')
        }

        if (req.body.password.length < 6 ) {
            throw new Error('Preencha o campo "senha" com, no mínimo, 6 caracteres')
        }

        const id: string = generate()

        await insertUser(
            id,
            req.body.email,
            req.body.password
        )

        const token = generateToken({id})

        res
            .status(200)
            .send({ token })

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }

}
```