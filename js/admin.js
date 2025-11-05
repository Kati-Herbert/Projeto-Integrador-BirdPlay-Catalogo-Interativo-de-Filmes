const dbUsuarios = new PouchDB('usuarios');
const dbFilmes = new PouchDB('filmes');

document.getElementById('abaFilmes').onclick = () => trocarAba('filmes');
document.getElementById('abaUsuarios').onclick = () => trocarAba('usuarios');

function trocarAba(aba) {
  document.getElementById('secaoFilmes').classList.toggle('active', aba === 'filmes');
  document.getElementById('secaoUsuarios').classList.toggle('active', aba === 'usuarios');
  document.getElementById('abaFilmes').classList.toggle('active', aba === 'filmes');
  document.getElementById('abaUsuarios').classList.toggle('active', aba === 'usuarios');
}

document.getElementById('formFilme').addEventListener('submit', async (e) => {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value.trim();
  const categoria = document.getElementById('categoria').value.trim();

  const filme = {
    _id: new Date().toISOString(),
    titulo,
    categoria
  };

  await dbFilmes.put(filme);
  listarFilmes();
  e.target.reset();
});

async function listarFilmes() {
  const lista = document.getElementById('listaFilmes');
  lista.innerHTML = '';

  const result = await dbFilmes.allDocs({ include_docs: true, descending: true });
  result.rows.forEach(row => {
    const filme = row.doc;
    const li = document.createElement('li');
    li.textContent = `${filme.titulo} - ${filme.categoria}`;
    lista.appendChild(li);
  });
}

document.getElementById('formUsuario').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const login = document.getElementById('login').value.trim();

  const usuario = {
    _id: new Date().toISOString(),
    nome,
    login
  };

  await dbUsuarios.put(usuario);
  listarUsuarios();
  e.target.reset();
});

async function listarUsuarios() {
  const lista = document.getElementById('listaUsuarios');
  lista.innerHTML = '';

  const result = await dbUsuarios.allDocs({ include_docs: true, descending: true });
  result.rows.forEach(row => {
    const usuario = row.doc;
    const li = document.createElement('li');
    li.textContent = `${usuario.nome} - ${usuario.login}`;
    lista.appendChild(li);
  });
}

window.onload = () => {
  trocarAba('filmes');
  listarFilmes();
  listarUsuarios();
};