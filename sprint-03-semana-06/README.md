# StarWars API

Bem-vindo ao projeto **StarWars API**. Este projeto é uma API simples criada com Express e MongoDB para gerenciar informações sobre filmes do universo Star Wars.

## Estrutura do Projeto

- `src/`
  - `index.js` - Arquivo principal da API.
- `node_modules/` - Dependências do projeto.
- `package.json` - Dependências e scripts do projeto.
- `package-lock.json` - Bloqueio de versão das dependências.
- `postman/`
  - `StarWars-API.postman_collection.json` - Coleção do Postman para testar a API.
- `.gitignore` - Arquivos e pastas a serem ignorados pelo Git.

## Funcionalidades

A API oferece as seguintes funcionalidades:

- **Listar Filmes**: `GET /`
- **Criar Filme**: `POST /`
- **Atualizar Filme**: `PUT /:id`
- **Deletar Filme**: `DELETE /:id`

## Instalação

1. Clone o repositório:

   ```bash
   git clone <https://github.com/ede-ch/edelin-estudos-compass>
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd starwars-api
   ```

3. Instale as dependências:

 ```bash
   npm install
  ``` 

## Configuração

Certifique-se de configurar sua conexão com o MongoDB no arquivo index.js. Substitua o URL da conexão pelo URL do seu banco de dados MongoDB.

 ```javascript
   mongoose.connect('mongodb+srv://ede-ch:mCb0PuzoFTsTwd7Q@starwars-api.9ypn0.mongodb.net/?retryWrites=true&w=majority&appName=starwars-api');
```

## Uso

1. Inicie o servidor:
```sql
npm start
``` 
O servidor será iniciado na porta 3000.

2. Use o Postman para interagir com a API. Importe a coleção do Postman fornecida em postman/StarWars-API.postman_collection.json para testar os endpoints.

- Abra o Postman.
- Selecione "Import".
- Escolha o arquivo StarWars-API.postman_collection.json localizado na pasta postman.
- Clique em "Import" para adicionar a coleção ao Postman.

## Documentação do Postman

A documentação da API está incluída na coleção do Postman, localizada em postman/StarWars-API.postman_collection.json. Este arquivo contém exemplos de solicitações e respostas para todos os endpoints da API.


