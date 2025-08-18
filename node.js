function atualizarStatus() {
  fetch("https://api.mcsrvstat.us/2/mc.venuscraft.com")
    .then(res => res.json())
    .then(data => {
      let status = document.getElementById("status");
      if (data.online) {
        status.innerHTML = `✅ Online - Jogadores: ${data.players.online}/${data.players.max}`;
      } else {
        status.innerHTML = "❌ Servidor Offline";
      }
    })
    .catch(() => {
      document.getElementById("status").innerHTML = "⚠️ Erro ao buscar status";
    });
}
atualizarStatus();

setInterval(atualizarStatus, 1000);