# Aprofundamento de SQL | Aula 45

### Exercício 1
* Leia os comandos abaixo e indique o que eles fazem. Não os rode nas tabelas desse projeto! Explique o que elas fariam se fossem rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder
```sh
a. ALTER TABLE Actor DROP COLUMN salary;
"Resposta: Apaga a coluna salary"
```

```sh
b. ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
"Resposta: Na tabela Actor, muda a coluna 'gender' para 'sex'"
```

```sh
c. ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
"Resposta: Na tabela Actor, muda a coluna 'gender' para 'gender' novamente"
```

```sh
d. Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres;
"Resposta: ALTER TABLE Actor CHANGE gender gender VARCHAR(100)"
```
-------------------------------------------------------------------

### Exercício 2
* a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
```sh
UPDATE Actor 
SET birth_date = "1940-10-10"
WHERE id = "003";
```
* b. Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PÃES. Então, escreva outra query para voltar ao nome anterior.
```sh
UPDATE Actor 
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```
* c. Escreva uma query que atualize todas as informações do ator com o id 005
```sh
UPDATE Actor
SET 
name = "Juliana Paes",
birth_date = "1994-12-10"
salary = 600000,
gender = "female"
WHERE id = "005";
```
* d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 
```sh
UPDATE Actor
SET age = "54"
WHERE id = "102";

Error Code: 1054. Unknown column 'age' in 'field list'

Ele não encontrou a coluna 'age' na tabela Actor, por isso deu erro ao inserir.
```

-------------------------------------------------------------------

### Exercício 3
* a. Escreva uma query que apague a atriz com o nome Fernanda Montenegro

```sh
DELETE FROM Actor
WHERE id = "004";
```
*b. Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
```sh
DELETE FROM Actor
WHERE gender = "male" 
AND salary > 1000000;
```

-------------------------------------------------------------------

### Exercício 4
* a. Escreva uma query que pegue o maior salário de todos os atores e atrizes.
```sh
SELECT MAX(salary)
FROM Actor;
```
* b. Escreva uma query que pegue o menor salário das atrizes.
```sh
SELECT MIN(salary)
FROM Actor;
```

* c. Escreva uma query que pegue a quantidade de atrizes.
```sh
SELECT COUNT(*)
FROM Actor
WHERE gender = "female";
```

* d. Escreva uma query que pegue a soma de todos os salários.
```sh
SELECT SUM(salary)
FROM Actor;
```

-------------------------------------------------------------------

### Exercício 5
* a. Releia a última query. Teste-a. Explique o resultado com as suas palavras 
```sh
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

Ele conta quantos atores tem do genero masculino e quantas atrizes do genero feminino, separando por colunas de 'COUNT(*)' e 'gender'
```

* b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
```sh
SELECT id, name FROM Actor
ORDER BY name DESC;
```

* c. Faça uma query que retorne todos os atores ordenados pelo salário.
```sh
SELECT name, salary FROM Actor
ORDER BY salary;
```

* d. Faça uma query que retorne os atores com os três maiores salarios
```sh
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

* e. Faça uma query que retorne a média de salário por gênero.
```sh
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

-------------------------------------------------------------------

### Exercício 6
* a. Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 

```sh
ALTER TABLE Movie 
ADD COLUMN playing_limit_date
VARCHAR(255); 
```

```sh
```

-------------------------------------------------------------------

### Exercício 7
* a.

```sh
```

```sh
```

-------------------------------------------------------------------

### Exercício 8
* a.

```sh
```

```sh
```


