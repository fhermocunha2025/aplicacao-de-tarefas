# 📝 Aplicação de Tarefas (To-Do List) com React

Este projeto é uma aplicação completa de gerenciamento de tarefas desenvolvida como parte da trilha de especialização em desenvolvimento Full Stack. O objetivo principal é demonstrar o domínio sobre rotas, estado global com Context API e persistência de dados.

## 🚀 Funcionalidades
- **CRUD Completo:** Adicionar, visualizar, marcar como concluída e excluir tarefas.
- **Navegação Dinâmica:** Troca de páginas entre Home e Formulário sem recarregar o navegador usando React Router.
- **Persistência de Dados:** Uso do `localStorage` para garantir que as tarefas não sejam perdidas ao fechar ou atualizar o navegador.
- **Renderização Condicional:** Tratamento de estados vazios para melhorar a experiência do usuário.

## 🛠️ Tecnologias Utilizadas
- **React.js:** Biblioteca principal.
- **React Router Dom:** Para o sistema de rotas e navegação.
- **Context API:** Para o gerenciamento de estado global da aplicação.
- **CSS3:** Estilização da interface.

## 📂 Estrutura do Projeto
A organização do código segue as melhores práticas de componentização:
- `/context`: Contém o `TaskContext` que distribui os dados por toda a aplicação.
- `/pages`: Componentes principais das telas (Home e AddTask).
- `/components`: Componentes reutilizáveis (botões, listas, etc).

## 🔧 Como executar o projeto
1. Clone este repositório:
   ```bash
   git clone [https://github.com/](https://github.com/)[seu-usuario]/aplicacao-de-tarefas.git