# Frontend

## Tecnologias e Ferramentas

- TypeScript;
- React;
- React Hook Form;
- React Query;
- Tailwind CSS;
- Zod;
- Docker.

## Instruções

- Acesse o diretório `frontend`;
- Crie o arquivo `.env` e preencher as variáveis de ambiente conforme sua necessidade:

```bash
cp .env.example .env
```

- Execute o comando abaixo para subir o container da aplicação:
  - Certifique-se de especificar servidores DNS para o Docker. Saiba mais [clicando aqui](https://docs.docker.com/config/daemon/troubleshoot/#specify-dns-servers-for-docker).

```bash
docker compose up -d
```

- Aguarde alguns instantes e a aplicação deverá estar acessível em http://localhost:5173.
