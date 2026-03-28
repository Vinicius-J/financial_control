# 💰 Financial Control API

![Node](https://img.shields.io/badge/node.js-18+-green)
![TypeScript](https://img.shields.io/badge/typescript-5-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

<!-- Exemplo de cabeçalho -->

API de **controle financeiro** desenvolvida com **Node.js** e **TypeScript**, utilizando **JWT (JSON Web Token)** para controle de acesso.

Este projeto foi criado com o objetivo de demonstrar boas práticas no desenvolvimento de APIs backend, incluindo:

- autenticação com JWT
- proteção de rotas
- types, enums, interfaces TypeScript
- agregações no banco de dados MongoDB
- organização de código com clean architeture
- uso de variáveis de ambiente
- estrutura escalável para aplicações backend

---

# 📚 Funcionalidades

- ✅ Criar transação (receita ou despesa)
- ✅ Listar transações
- ✅ Atualizar transação
- ✅ Excluir transação
- ✅ Filtrar por período
- ✅ Relatório mensal
- ✅ Autenticação por usuário

---

# 🚀 Tecnologias utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **JWT (jsonwebtoken)**
- **bcrypt**
- **dotenv**

---

# 📦 Clonando o projeto

Clone o repositório:

```bash
git clone https://github.com/Vinicius-J/financial_control.git
```

Entre na pasta do projeto:

```bash
cd financial_control
```

---

# 📥 Instalando dependências

Instale as dependências do projeto:

```bash
npm install
```

ou

```bash
yarn install
```

---

# ⚙️ Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto.

Você pode usar como exemplo o arquivo `.env.example`.

Exemplo:

```env
PORT=3000

JWT_SECRET="your_jwt_secret"

DATABASE_URL="your_database_url"
```

### Descrição das variáveis

| Variável     | Descrição                                    |
| ------------ | -------------------------------------------- |
| PORT         | Porta em que a aplicação será executada      |
| JWT_SECRET   | Chave secreta usada para gerar os tokens JWT |
| DATABASE_URL | URL de acesso para o banco de dados MongoDB      |

---

# ▶️ Executando o projeto em desenvolvimento

Para iniciar o servidor em modo desenvolvimento:

```bash
npm run dev
```

Esse modo utiliza **nodemon** para reiniciar o servidor automaticamente após alterações no código.

A API ficará disponível em:

```
http://localhost:3000
```

---

# 🏗️ Build do projeto

Para compilar o projeto TypeScript para JavaScript:

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta:

```
dist/
```

---

# 🚀 Executando em produção

Após gerar o build, execute:

```bash
npm start
```

ou diretamente:

```bash
node dist/server.js
```

---

# 🔑 Autenticação

A API utiliza **JWT (JSON Web Token)** para autenticação.

Após realizar login, um token será gerado.

Esse token deve ser enviado no header das requisições protegidas:

```
Authorization: Bearer SEU_TOKEN
```

Exemplo:

```http
GET /users
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

# 📡 Endpoints da API

### Autenticação

#### Criar usuário

```
POST /users
```

Body:

```json
{
  "name": "Vinicius",
  "email": "vinicius@email.com",
  "password": "123456"
}
```

---

#### Rota protegida

```
GET /users
```

Header necessário:

```
Authorization: Bearer TOKEN
```

---

# 📂 Estrutura do projeto

```
src
 ├── domain
 │     ├── entities
 │     ├── repositories
 │     ├── services
 │
 ├── application
 │     ├── dtos
 │     ├── factories
 │     ├── services
 │     ├── useCases
 │
 ├── infrastructure
 │     ├── auth
 │     ├── mappers
 │     ├── controllers
 │     ├── middlewares
 │     ├── repositories
 │
 ├── main
 │     ├── factories
 │     ├── routes
 │     ├── app.ts
 └     └── server.ts

```

---

# 🧠 Conceitos aplicados

Este projeto aplica alguns conceitos importantes de backend:

- organização de código em camadas
- autenticação baseada em token
- middleware para proteção de rotas
- uso de variáveis de ambiente
- separação de responsabilidades

---

# 📄 Licença

Este projeto está sob a licença **[MIT](./LICENSE)**.

---

# 👨‍💻 Autor

Desenvolvido por **<a href="https://github.com/Vinicius-J">
Vinícius Joaquim</a>**

GitHub:

```
https://github.com/Vinicius-J
```

---

# ⭐ Contribuição

Contribuições são bem-vindas!

Se quiser contribuir:

1. Fork o projeto
2. Crie uma branch

```
git checkout -b minha-feature
```

3. Commit suas alterações

```
git commit -m "Minha nova feature"
```

4. Faça push

```
git push origin minha-feature
```

5. Abra um Pull Request
