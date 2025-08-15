
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
    'titulo': 'Temporada 2...',
    'descricao': 'Neste arquivo você pode reviver a nostalgia vendo nossa galeria de fotos de todos os momentos da Venus Craft até a temporada 2!',
    'imagem': 'https://media.discordapp.net/attachments/1348280519967641652/1348285054991863880/2025-02-10_20.05.20.png?ex=68a0864f&is=689f34cf&hm=ad3da4c4954e9875f6767e50fae32eb270969cee23a61de486a6cbc5ca75c73c&=&format=webp&quality=lossless&width=1105&height=569',
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

  img.addEventListener('click', abrirDetalhes);
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
