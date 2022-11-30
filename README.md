![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

# API para gestão de eventos

## Desafio MBLabs

API para gestão de eventos, usuários podem buscar e comprar ingressos de um determinado evento.

Neste projeto foi utilizado o Typeorm para manipulação dos dados no banco de dados.

## Instruções

- clonar repositório.
  ```
    git clone https://github.com/sidneyfrancois/api-gestao-de-eventos.git
  ```
- entrar na pasta do projeto.
  ```
  cd api-gestao-de-eventos
  ```
- Criar imagem do docker e inicializar containers. (comando -d opctional para rodar containers em segundo plano)
  ```
    docker compose up -d
  ```
  Após a initialização dos containers é feita a migration para criação de tabelas do banco de dados e posteriormente a aplicação se inicializa.
