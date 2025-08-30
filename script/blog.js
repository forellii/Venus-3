
const feedContainer = document.getElementById('feed-container');
const content = document.getElementById('content');
const asideTitle = document.getElementById('aside_title');
const closeButton = document.getElementById('close');
const details = document.getElementById('details');
feedContainer.innerHTML = "";

// Cria post sem interação
const noticias = [
  {
    'id': 'venustrailer',
    'titulo': 'Venus Craft | Temporada 3!',
    'descricao': 'Assista ao maravilhoso trailer da Venus Craft! aproveite e ajude o canal!',
    'imagem': '../img/thumbs/thumb2.png',
    'fonte': 'https://youtu.be/QSiX0oOdKsA?si=YcJcglNiyIjrcEtC',
    'detalhes': 'Assista ao maravilhoso trailer da Venus Craft! aproveite e ajude o canal, compartilhe com amigos e em outros servidor, nos vemos em Venus dia 06 de setembro!⚔💛'
  },
  {
    'id': 'venusteaser',
    'titulo': 'Venus Craft 3 | Teaser',
    'descricao': 'Veja o teaser da Venus Craft já disponivel no YouTube!',
    'imagem': '../img/thumbs/thumb1.png',
    'fonte': 'https://youtu.be/aZM8YaY7xag',
    'detalhes': 'Veja o teaser da Venus Craft já disponivel no YouTube!'
  },
  {
    'id': 'temporada-2',
    'titulo': 'Temporada 2...',
    'descricao': 'Neste arquivo você pode reviver a nostalgia vendo nossa galeria de fotos de todos os momentos da Venus Craft até a temporada 2!',
    'imagem': '../img/posts/players.png',
    'fonte': 'https://drive.google.com/drive/folders/1oXHv_Tzxyhkamur4rRVs6QC52rkc7R6x?usp=drive_link',
    'detalhes': 'Reviva a nostalgia com esse link para o Drive, veja as estruturas e toda a história contruidas pelos players da Venus Craft de 18/01/2025 a 12/04/2025! (até coisas que não foram mostradas...:))'
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

  titulo.addEventListener('click', abrirDetalhes);

  if (noticia.fonte && noticia.fonte.trim() !== "") {
  const fonte = document.createElement('a');
  fonte.className = 'fonte';
  fonte.href = noticia.fonte;
  fonte.textContent = 'Visitar';
  fonte.target = '_blank';
  conteudo.appendChild(fonte);
}

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

const menu = document.getElementById('menu');
const btnOpen = document.getElementById('btn-open');

btnOpen.addEventListener('click', () => {
    menu.classList.toggle('open');
});

const pullToRefresh = document.querySelector('.pull-to-refresh');
let touchstartY = 0;
document.addEventListener('touchstart', e => {
  touchstartY = e.touches[0].clientY;
});
document.addEventListener('touchmove', e => {
  const touchY = e.touches[0].clientY;
  const touchDiff = touchY - touchstartY;
  if (touchDiff > 0 && window.scrollY === 0) {
    pullToRefresh.classList.add('visible');
    e.preventDefault();
  }
});
document.addEventListener('touchend', e => {
  if (pullToRefresh.classList.contains('visible')) {
    pullToRefresh.classList.remove('visible');
    location.reload();
  }
});