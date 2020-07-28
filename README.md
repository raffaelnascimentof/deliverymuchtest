# Recipes API

A API tem como objetivo trazer uma lista de receitas de acordo com os ingredientes passados na requisição.

# Do que preciso para rodar ?

Para rodar o projeto você precisa ter na sua maquina:
 - Clone do projeto
 - [NodeJs](https://nodejs.org/en/) (versão utilizada v12.18.3)
 - [Docker](https://www.docker.com/get-started) 
 
 # Como rodar ?
 No local onde foi clonado o projeto rode o comando `npm intall` para instalar todas a dependências que o projeto precisa para executar,depois de terminar a instalação é preciso configurar a API_KEY da api https://developers.giphy.com, com a chave criada adicione na constante chamada `API_KEY` no arquivo`giphyService.js`.
 
 Na raiz do projeto contém o arquivo **Dockerfile** rode o comando `docker build -t recipe-api .` para criar a imagem que vamos rodar no Docker para subir a
aplicação, com a imagem criada em qualquer terminal basta rodar o comando `docker run -p 3000:3000 -d recipe-api`
 
 # Consumindo a api
 Com o passo anterio OK, agora podemos realizar uma requisição para o endereço `http://localhost:3000/recipes?i={ingredientes}`
  - i = nome dos ingredientes (nomes em ingles e no maximo 3 por requisição)
  
  Exemplo de ULR
  -  `http://localhost:3000/recipes?i=onions`
  
# Retorno da requisição

Vai retornar um array de objetos Json na seguinte estrutura
```
{
  "key": "palavras chave",
  "recipes": [
    {
      "title": "titulo da receira",
      "ingredients": [
        "ingrediente1"
      ],
      "link": "link para receita",
      "gif": "gif"
    },

```

# Próximos passos ?
 - Melhorar tempo de reposta da requisição.
 - Deixar mais clean a função `buildResponse()` da classe `recipesController.js`
 - Melhorar o input da API_KEY para acesso a api externa


