# BirdPlay – Catálogo Interativo de Filmes

**Vídeo Pitch do Projeto:**  
https://drive.google.com/file/d/1T1fEdpm0OJOJSOkzuWrgH36lCANYwNa3/view?usp=sharing

Aplicação web desenvolvida para apresentar um catálogo simples e funcional de filmes, organizados por categorias, com acesso aos detalhes de cada título (poster, sinopse e trailer).  
O sistema também conta com área administrativa exclusiva, onde é possível gerenciar filmes e usuários.

## Login de Acesso (Administrador)
- **Usuário:** admin  
- **Senha:** 123  
O administrador possui acesso completo ao painel de gerenciamento e não pode ser editado ou excluído.

## Tecnologias Utilizadas
- HTML, CSS e JavaScript
- PouchDB (armazenamento local)
- Deploy em ambiente web: Netlify
- Versionamento: GitHub

## Funcionalidades Principais
- Sistema de login com controle de acesso por perfil
- **CRUD completo de filmes** (cadastro, edição, listagem e exclusão)
- **CRUD de usuários** com restrições de edição/exclusão para o usuário admin
- Exibição de catálogo por categorias
- Visualização de detalhes: poster, sinopse e trailer
- Proteção de rotas (usuário comum não acessa admin.html)
- Interface leve e responsiva

## Regras de Negócio
- Não é permitido registrar dois usuários com o mesmo login.
- Login não pode ser alterado após criação.
- Usuário **admin** é criado automaticamente e não pode ser excluído nem editado.
- Após login:
  - usuários comuns → `index.html`
  - administrador → `admin.html`

## Documentação e Materiais Complementares
Toda a documentação referente ao desenvolvimento do BirdPlay está localizada na pasta **/docs** do repositório.
Conteúdo disponível:
- **Vídeo Pitch**
- **Apresentação (PDF)**
- **Diagramas (Caso de Uso, Sequência e MER)**
  - incluídos dentro do PDF
- **Prints das telas**
  - incluídos dentro do PDF

## Recomendações para Visualização e Execução
- Para visualizar corretamente o PDF diretamente no VS Code, recomendamos instalar a extensão:
  **vscode-pdf**
- Para executar o projeto de forma prática no navegador, recomendamos instalar a extensão:
  **Live Server**

Após instalar o Live Server:
1. Abra o projeto no VS Code
2. Clique com o botão esquerdo no arquivo `login.html`
3. Selecione **"Go Live"** na parte inferior direita da tela.
O navegador abrirá automaticamente e exibirá a tela inicial de login.

## Repositório do Projeto
GitHub:  
https://github.com/Kati-Herbert/Projeto-Integrador-BirdPlay-Catalogo-Interativo-de-Filmes

## Demonstração Online
Acesso via Netlify:  
https://birdplay-catalogointerativo-de-filmes.netlify.app/login.html

---

## Autoria
**Instituição:** UCEFF  
**Curso:** Análise e Desenvolvimento de Sistemas  
**Professor:** Caio Vinicio Koch dos Santos  
**Integrantes:**  
- Eduardo Dalfovo  
- Daniel Kappaun  
- Katiéli Herbert

---

## Observações Finais
O projeto foi desenvolvido com foco em autenticação, controle de acesso e manipulação dinâmica de dados.  
A simplicidade visual foi priorizada para garantir fluidez, desempenho e clareza no uso.