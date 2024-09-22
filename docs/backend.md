# Backend

## Tecnologias e Ferramentas

- TypeScript;
- Nodejs;
- Drizzle ORM;
- PostgreSQL;
- Fastify;
- Zod;
- Docker.

## Instruções

- Acesse o diretório `backend`;
- Crie o arquivo `.env` e preencher as variáveis de ambiente conforme sua necessidade:

```bash
cp .env.example .env
```

- Execute o comando abaixo para subir o container da aplicação:
  - Certifique-se de especificar servidores DNS para o Docker. Saiba mais <a target="_blank" href="https://docs.docker.com/engine/daemon/troubleshoot/#specify-dns-servers-for-docker">clicando aqui</a>.

```bash
docker compose up -d
```

- Aguarde alguns instantes e a API deverá estar acessível na URL informada no arquivo `.env`;
- Inicialmente as tabelas do banco de dados estarão vazias, mas é possível preenchê-las acessando o container da API e executando o seguinte comando:

```bash
npm run seed
```
