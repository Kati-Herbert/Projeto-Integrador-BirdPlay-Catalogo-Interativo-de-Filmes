const dbUsuarios = new PouchDB('usuarios');

document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const login = document.getElementById('login').value.trim().toLowerCase();
  const senha = document.getElementById('senha').value;

  if (!nome || !login || !senha) {
    alert('Preencha todos os campos.');
    return;
  }

  const usuario = {
    _id: new Date().toISOString(),
    nome,
    login,
    senha
  };

  try {
    await dbUsuarios.put(usuario);
    alert('Cadastro realizado!');
    document.getElementById('cadastroForm').reset();
  } catch (err) {
    console.error('Erro ao salvar usuário:', err);
    alert('Erro no cadastro.');
  }
});