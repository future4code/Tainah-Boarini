### c. Explique, com as suas palavras, as diferenças entre as duas implementações
    * A implementação de função utilizando inversão de dependências cria uma função como parametro sem depender de uma função externa, como a função de validação diretamente na implementação.

    Isso é importante para fazer os testes unitários independerem de fatores externos. 

### a. De qual das duas funções (validateCharacter ou performAttack)  deveremos criar um Mock nos próximos testes? Justifique.
    * performAttack porque ela vai depender de uma função além dela.

### b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento

```sh 
test("Mock", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});

```

### c. Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento

```sh 
test("Mock", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});

```