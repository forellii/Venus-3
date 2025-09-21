const logo = document.getElementById('logo')
logo.addEventListener('click', () => {
    window.open('https://discord.com/channels/1363124302534414638/1363145842894176497/1411473200298070169' , '_blank');
});

//mobile menu
const menu = document.getElementById('header');
const btnOpen = document.getElementById('btn-open');
const headertop = document.querySelector('.header-top');

btnOpen.addEventListener('click', () => {
    menu.classList.toggle('open');
    headertop.classList.toggle('up');
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

