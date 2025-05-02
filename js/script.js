function addMessage(text, sender = "bot") {
  const chatBox = document.getElementById("chat-box");
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendStatus() {
  const statuses = [
    "📢 Status do Jogo: FURIA 2 x 1 Adversário!",
    "🎮 O jogo está rolando! FURIA lidera o placar.",
    "🔥 Round acirrado! FURIA com vantagem econômica."
  ];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  showTyping(() => {
    addMessage(randomStatus);
  });
}

function sendNews() {
  const news = [
    "📰 Última notícia: MVP da partida foi o jogador X!",
    "📺 Entrevista pós-jogo com o time disponível no YouTube!",
    "🧠 Novo reforço tático anunciado pela FURIA!"
  ];
  const randomNews = news[Math.floor(Math.random() * news.length)];

  showTyping(() => {
    addMessage(randomNews);
  });
}

function sendCheer() {
  const cheers = [
    "🔥 VAI FURIAAAA!",
    "🐾 DOMINA ESMAGA, FURIA!",
    "⚡ Mostra a garra, FURIA!",
    "🎯 Só capa, FURIA!",
    "🏆 Rumo ao título! Vamos FURIA!"
  ];
  const randomCheer = cheers[Math.floor(Math.random() * cheers.length)];

  showTyping(() => {
    addMessage(randomCheer);
  });
}

function showTyping(callback) {
  const chatBox = document.getElementById("chat-box");
  const typing = document.createElement("div");
  typing.className = "message bot";
  typing.textContent = "Digitando...";
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    chatBox.removeChild(typing);
    callback();
  }, 1000);
}

function sendUserMessage() {
  const userInput = document.getElementById("userText");
  const text = userInput.value.trim();
  if (text) {
    addMessage(text, "user");
    userInput.value = "";

    showTyping(() => {
      addMessage("Obrigado pela sua mensagem!");
    });
  }
}

document
  .getElementById("userText")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendUserMessage();
    }
  });
