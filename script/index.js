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

//kits
const basic = document.getElementById('basic')
basic.addEventListener('click', () => {
    window.open('https://discord.com/channels/1363124302534414638/1363137487467188315/1409185375989141544' , '_blank');
});
const advance = document.getElementById('advance')
advance.addEventListener('click', () => {
    window.open('https://discord.com/channels/1363124302534414638/1363137487467188315/1409185375989141544' , '_blank');
});
const supreme = document.getElementById('supreme')
supreme.addEventListener('click', () => {
    window.open('https://discord.com/channels/1363124302534414638/1363137487467188315/1409185375989141544' , '_blank');
});
const storm = document.getElementById('storm')
storm.addEventListener('click', () => {
    window.open('https://discord.com/channels/1363124302534414638/1363137487467188315/1409185375989141544' , '_blank');
});
const booster = document.getElementById('booster')
booster.addEventListener('click', () => {
    window.open('https://discord.com/channels/1363124302534414638/1363137487467188315/1418333354142470285' , '_blank');
});