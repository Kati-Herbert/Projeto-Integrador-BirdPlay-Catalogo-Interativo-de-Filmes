const dbUsuarios = new PouchDB('usuarios');

async function criarAdminPadrao() {
  try {
    const resultado = await dbUsuarios.allDocs({ include_docs: true });
    const existeAdmin = resultado.rows.some(row => row.doc.login === 'admin');

    if (!existeAdmin) {
      await dbUsuarios.put({
        _id: new Date().toISOString(),
        nome: 'Administrador',
        login: 'admin',
        senha: '123'
      });
    }
  } catch (err) {
    console.error('Erro ao criar admin:', err);
  }
}

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const login = document.getElementById('login').value.trim().toLowerCase();
  const senha = document.getElementById('senha').value;
  const mensagem = document.getElementById('mensagem-erro');
  mensagem.textContent = '';

  try {
    const result = await dbUsuarios.allDocs({ include_docs: true });
    const usuario = result.rows.find(r => r.doc.login === login && r.doc.senha === senha);

    if (usuario) {
      mensagem.textContent = 'Login realizado com sucesso!';
    } else {
      mensagem.textContent = 'Usuário ou senha incorretos.';
    }

  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    mensagem.textContent = 'Erro interno.';
  }
});

criarAdminPadrao();