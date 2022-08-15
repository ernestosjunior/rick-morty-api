### Enviroments

- Node >= 14
- Yarn
- Docker
- Docker Compose

#### Antes de rodar:

- Criar o arquivo .env no root da aplicação e adicionar as envs que estão em .env.example

A aplicação esta dockerizada então pra subir bastar rodar o comando:

`docker compose up -d`

E então iniciar a aplicação:

`yarn start:dev` para development
`yarn start:prod` para production
