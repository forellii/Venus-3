
const feedContainer = document.getElementById('feed-container');
const content = document.getElementById('content');
const asideTitle = document.getElementById('aside_title');
const closeButton = document.getElementById('close');
const details = document.getElementById('details');
feedContainer.innerHTML = "";

// Cria post sem interação
const noticias = [
  {
    'id': '???',
    'titulo': '...',
    'descricao': '!!!',
    'imagem': 'https://cdn.discordapp.com/attachments/1353066159720759327/1406433143447224340/image.png?ex=68a31b2f&is=68a1c9af&hm=3db81292822fc87ffc41c6b24824e140f2cf642af71a507aefb0e131ddb0a1b6&',
    'fonte': '',
    'detalhes': 'Error: 00110011 -------------contact the server administrator'
  },
  {
    'id': 'temporada-2',
    'titulo': 'Temporada 2...',
    'descricao': 'Neste arquivo você pode reviver a nostalgia vendo nossa galeria de fotos de todos os momentos da Venus Craft até a temporada 2!',
    'imagem': 'https://cdn.discordapp.com/attachments/1348280519967641652/1348281878192590950/2025-01-14_16.51.42.png?ex=68a1d4d9&is=68a08359&hm=c246fb4f223c982ba3dbf5ab663e8b66718ead65f55caee9e7746a4951559966&',
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
