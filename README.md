![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

# API para gestão de eventos

## Desafio MBLabs

API para gestão de eventos, usuários podem buscar e comprar ingressos de um determinado evento.

Neste projeto foi utilizado o Typeorm para manipulação dos dados no banco de dados.

## Banco de Dados

![Data Base diagram](/diagram.png)

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
  Após a initialização dos containers é feita a migration para criação de tabelas no banco de dados e posteriormente a aplicação se inicializa.

## Endpoints

- Criação do host do evento (empresa ou universidade)

  `POST /hostevent`

  Corpo da requisição

  ```
  {
    "name": "name_host_event"
  }
  ```

- Criação do evento

  `POST /event`

  Corpo da requisição

  ```
  {
    "name": "name_event",
    "hostevent_id": "cdf5fbd7-104a-4071-b9e3-dedf68ba579b"
  }
  ```

- Criação de ingresso

  `POST /ticket`

  Corpo da requisição

  ```
  {
    "event_id": "748cedc4-47cc-48dc-883b-06abfa4bcd88",
    "isAvailable": true
  }
  ```

- Listar todos os ingressos disponíveis

  `GET /ticket`

- Criação do host do evento (empresa ou universidade)

  `POST /hostevent`

  Corpo da requisição

  ```
  {
    "name": "name_host_event"
  }
  ```

- Criação do evento

  `POST /event`

  Corpo da requisição

  ```
  {
    "name": "name_event",
    "hostevent_id": "cdf5fbd7-104a-4071-b9e3-dedf68ba579b"
  }
  ```

- Criação de ingresso

  `POST /ticket`

  Corpo da requisição

  ```
  {
    "event_id": "748cedc4-47cc-48dc-883b-06abfa4bcd88",
    "isAvailable": true
  }
  ```

- Listar todos os ingressos

  `GET /ticket`

- Listar todos os ingressos disponíveis

  `GET /availabletickets`

- Listar todos os ingressos indisponíveis

  `GET /unavailabletickets`

- Compra de ingresso

  `POST /buyticket`

  Corpo da requisição

  ```
  {
    "ticket_id": "748cedc4-47cc-48dc-883b-06abfa4bcd88"
  }
  ```
