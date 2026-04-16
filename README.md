# devops-text-utils-api

[![CI](https://github.com/OWNER/devops-text-utils-api/actions/workflows/ci.yml/badge.svg)](./.github/workflows/ci.yml)
[![CD](https://github.com/OWNER/devops-text-utils-api/actions/workflows/cd.yml/badge.svg)](./.github/workflows/cd.yml)

API REST simples em Node.js/Express com utilitários de texto. Projeto criado como atividade formativa de DevOps (PUCPR — ADS EAD) para praticar Git, GitHub Actions (CI/CD) e Docker.

## Endpoints

| Método | Rota                  | Descrição                                 |
| ------ | --------------------- | ----------------------------------------- |
| GET    | `/health`             | Health check (status + uptime)            |
| GET    | `/reverse/:text`      | Inverte o texto                           |
| GET    | `/uppercase/:text`    | Converte o texto para maiúsculas          |
| GET    | `/palindrome/:text`   | Verifica se o texto é palíndromo          |

## Desenvolvimento

```bash
npm install
npm test          # Roda Jest + Supertest com cobertura
npm start         # Sobe a API em http://localhost:3000
```

## Docker

```bash
docker build -t devops-text-utils-api .
docker run --rm -p 3000:3000 devops-text-utils-api
curl http://localhost:3000/health
```

## Estrutura

```
.
├── .github/workflows/   # CI (testes) e CD (build da imagem Docker)
├── src/                 # app.js (rotas) + server.js (entrypoint)
├── tests/               # Testes Jest
├── Dockerfile           # Imagem multi-stage baseada em node:20-alpine
└── package.json
```

## Fluxo de DevOps exercitado

- **Semana 2** — Repositório público no GitHub, branches, commits, PR.
- **Semana 3** — CI com Jest em matriz Node 18/20 + CD construindo imagem Docker via GHCR.
- **Semana 4** — Dockerfile multi-stage, container rodando localmente e validado via health check.
