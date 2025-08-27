const yt = document.getElementById('youtube');
const ttk = document.getElementById('tiktok')

yt.addEventListener('click', () => {
    window.open('https://www.youtube.com/@forelliii' , '_blank');
});
ttk.addEventListener('click', () => {
    window.open('https://tiktok.com/@forellii' , '_blank');
});







//mobile menu
const menu = document.getElementById('menu');
const btnOpen = document.getElementById('btn-open');

btnOpen.addEventListener('click', () => {
    menu.classList.toggle('open');
});

//Status do Servidor
function atualizarStatus() {
  fetch("https://api.mcstatus.io/v2/status/java/br-ultra-5.enxadahost.com:10006")
    .then(res => res.json())
    .then(data => {
      let status = document.getElementById("status");
      if (data.online) {
        let players = data.players.online;
        let max = data.players.max;
        let version = data.version.name_raw;
        status.innerHTML = `Online - ${players}/${max} jogadores`;
      } else {
        status.innerHTML = "Servidor Offline";
      }
    })
    .catch(() => {
      document.getElementById("status").innerHTML = "Erro ao buscar status";
    });
}

atualizarStatus();

setInterval(atualizarStatus, 10000);