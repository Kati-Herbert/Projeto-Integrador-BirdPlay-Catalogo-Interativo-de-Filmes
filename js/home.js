const dbFilmes = new PouchDB('filmes');
const listaFilmes = document.getElementById('lista-filmes');
let detalheAberto = null;

async function carregarFilmes() {
  try {
    const result = await dbFilmes.allDocs({ include_docs: true });
    const filmes = result.rows.map(row => row.doc);
    mostrarFilmes(filmes);

    document.querySelectorAll('.categoria-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const categoria = btn.dataset.categoria;

        if (categoria === 'todos') {
          mostrarFilmes(filmes);
        } else {
          const filtrados = filmes.filter(f => f.categoria?.toLowerCase() === categoria.toLowerCase());
          mostrarFilmes(filtrados);
        }

        removerDetalhe();
      });
    });

  } catch (err) {
    console.error('Erro ao carregar filmes:', err);
  }
}

function mostrarFilmes(filmes) {
  listaFilmes.innerHTML = '';
  detalheAberto = null;
  filmes.forEach(filme => listaFilmes.appendChild(criarCard(filme)));
}

function criarCard(filme) {
  const div = document.createElement('div');
  div.className = 'filme-card';
  div.innerHTML = `
    <img src="${filme.imagem}" alt="${filme.titulo}">
    <h4>${filme.titulo}</h4>
  `;
  div.addEventListener('click', () => mostrarDetalhes(filme, div));
  return div;
}

function mostrarDetalhes(filme, card) {
  removerDetalhe();

  const detalhe = document.createElement('div');
  detalhe.className = 'detalhes-filme';
  detalhe.innerHTML = `
    <h3>${filme.titulo}</h3>
    <p><strong>Categoria:</strong> ${filme.categoria || 'N/A'}</p>
    <p>${filme.sinopse || 'Sem descrição.'}</p>
  `;

  card.insertAdjacentElement('afterend', detalhe);
  detalheAberto = detalhe;
}

function removerDetalhe() {
  if (detalheAberto) {
    detalheAberto.remove();
    detalheAberto = null;
  }
}

carregarFilmes();