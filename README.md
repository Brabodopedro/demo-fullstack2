# 🔐 Sistema de Autenticação com FastAPI + React + JWT

Projeto fullstack demonstrativo com **FastAPI (Python)** no back-end e **React (Vite)** no front-end, focado em:

---

## 🛠️ Tecnologias e Funcionalidades

### Backend (FastAPI)
- ✅ API REST com [FastAPI](https://fastapi.tiangolo.com/)
- ✅ Autenticação com JWT (expiração de token inclusa)
- ✅ Validação de usuários via `/auth/me`
- ✅ Middleware de CORS para integração com front-end
- ✅ Rotas públicas e rotas protegidas com token

### Frontend (React + Vite)
- ✅ Página pública (Home)
- ✅ Página de login integrada com a API
- ✅ Salvamento do token JWT no `localStorage`
- ✅ Validação do token e carregamento de usuário logado
- ✅ Painel protegido com menu lateral
- ✅ Logout completo (limpa token e redireciona)

---

## 📂 Estrutura do Projeto

```
demo-fullstack2/
├── backend-fastapi-auth/
│   └── app/
│       └── main.py
│   └── requirements.txt
└── vite-react-auth/
    └── src/
        ├── pages/
                ├── Dashboard.jsx
                ├── Home.jsx
                ├── Login.jsx
        ├── components/
                ├── ProtectedRoute.jsx
                ├── Sidebar.jsx
        ├── App.jsx
        ├── main.jsx
        └── index.css
```

---

## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/pedrohbobara/demo-fullstack2.git
cd demo-fullstack2
```

---

### 2. Back-end (FastAPI)

#### Acesse a pasta `backend-fastapi-auth`

```bash
cd backend-fastapi-auth
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

#### Execute o servidor:

```bash
uvicorn app.main:app --reload
```

> A API ficará disponível em `http://localhost:8000`

---

### 3. Front-end (React + Vite)

#### Acesse a pasta `vite-react-auth`

```bash
cd vite-react-auth
npm install
npm run dev
```

> A aplicação será iniciada em `http://localhost:5173`

---

## 🔐 Usuário de Teste

- **Usuário:** `admin`
- **Senha:** `123`

---

## 📌 Funcionalidade das rotas

### Backend (FastAPI)
| Método | Rota             | Descrição                          | Protegida |
|--------|------------------|------------------------------------|-----------|
| GET    | `/public`        | Conteúdo aberto ao público         | ❌        |
| POST   | `/auth/token`    | Gera token JWT com login/senha     | ❌        |
| GET    | `/auth/me`       | Retorna dados do usuário logado    | ✅        |
| GET    | `/private`       | Retorna conteúdo privado           | ✅        |

---

## 🧠 Futuras melhorias

- ✅ Submódulos dinâmicos no painel
- 🔄 Refresh automático de token
- 🛡️ Permissões por tipo de usuário (admin, editor, etc.)
- 🧪 Testes automatizados

---

## 🤝 Contribuição

Sinta-se à vontade para contribuir!  
Abra uma issue ou envie um pull request 🚀

---

## 📝 Licença

Este projeto está sob a licença MIT.  
Autor: **Pedro H B Obara**