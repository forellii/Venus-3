
const feedContainer = document.getElementById('feed-container');
const content = document.getElementById('content');
const asideTitle = document.getElementById('aside_title');
const closeButton = document.getElementById('close');
const details = document.getElementById('details');
feedContainer.innerHTML = "";

// Cria post sem interação
const noticias = [
  {
    'id': 'Teste',
    'titulo': 'Temporada 2!',
    'descricao': 'A temporada 2 de Venus Craft já esta disponível! Confira as novidades e atualizações que trazemos para você!',
    'imagem': 'https://cdn.discordapp.com/attachments/1304474131290390549/1350498816050331679/image.png?ex=68a00248&is=689eb0c8&hm=4e2ae213863c1c772d905003fb5e5873bc14a81b3de8145f0e865573ada2a30b&g',
    'fonte': '',
    'detalhes': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'id': 'Teste2',
    'titulo': 'Temporada 3!',
    'descricao': 'A temporada 3 de Venus Craft já esta disponível! Confira as novidades e atualizações que trazemos para você!',
    'imagem': 'https://cdn.discordapp.com/attachments/1348280519967641652/1348290406600937513/dfg.png?ex=68a08b4a&is=689f39ca&hm=50a1cb688b80c343d67282ca93f22d2567346023141af502ac3a5863af268110&',
    'fonte': '',
    'detalhes': 'sexo sexo sexo sexo'
  }
];

function criarPostagem(noticia) {
  const postagem = document.createElement('aside');
  postagem.classList.add('postagem');

  const img = document.createElement('img');
  img.className = 'imagem-postagem';
  img.src = noticia.imagem;

  const conteudo = document.createElement('div');
  conteudo.className = 'conteudo-postagem';

  const titulo = document.createElement('h2');
  titulo.className = 'titulo';
  titulo.textContent = noticia.titulo;

  const detalhes = document.createElement('p');
  detalhes.className = 'contant';
  detalhes.textContent = noticia.detalhes;

  titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    asideTitle.textContent = noticia.titulo;
    content.textContent = noticia.detalhes;
    details.classList.add('aberto');
  });

  const descricao = document.createElement('p');
  descricao.className = 'descricao';
  descricao.textContent = noticia.descricao;

   function abrirDetalhes() {
    content.textContent = noticia.detalhes;
    details.classList.add('aberto');
  }

  img.addEventListener('click', abrirDetalhes);
  titulo.addEventListener('click', abrirDetalhes);

  conteudo.appendChild(titulo);
  conteudo.appendChild(descricao);
  postagem.appendChild(img);
  postagem.appendChild(conteudo);
  feedContainer.appendChild(postagem);

  return postagem;
}

closeButton.addEventListener('click', () => {
  details.classList.remove('aberto');
});

noticias.forEach(noticia => {
  feedContainer.appendChild(criarPostagem(noticia));
});
