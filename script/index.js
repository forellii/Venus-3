const play = document.getElementById('play')
play.addEventListener('click', () => {
    window.open('https://discord.gg/wgYH9KQXUK' , '_blank');
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
        status.innerHTML = `🟢 - ${players}/${max} `;
      } else {
        status.innerHTML = "🔴 - OFF";
      }
    })
    .catch(() => {
      document.getElementById("status").innerHTML = "Erro ao buscar status";
    });
}

atualizarStatus();

setInterval(atualizarStatus, 10000);

function myFunction() {
  var copyText = document.getElementById("ip-server").value;
  navigator.clipboard.writeText(copyText).then(() => {
  });
}