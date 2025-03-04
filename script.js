// Controle do áudio
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('fundo-musical');

  // Função para reproduzir o áudio
  const playAudio = () => {
    audio.play().then(() => {
      console.log("Áudio reproduzido com sucesso!");
    }).catch((error) => {
      console.log("Autoplay bloqueado pelo navegador. O áudio só será reproduzido após interação do usuário.");
    });
  };

  // Tenta reproduzir o áudio assim que a página carregar
  playAudio();

  // Adiciona um evento de toque (para dispositivos móveis)
  document.body.addEventListener('touchstart', () => {
    playAudio();
  }, { once: true }); // O evento é removido após o primeiro toque

  // Adiciona um evento de clique (para desktop)
  document.body.addEventListener('click', () => {
    playAudio();
  }, { once: true }); // O evento é removido após o primeiro clique
});

// Código para o envio de mensagem no WhatsApp
document.getElementById('form-homenagem').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome && mensagem) {
    // Mensagem a ser enviada
    const mensagemFormatada = `${nome}: ${mensagem}`;
    
    // Números de WhatsApp para os quais a mensagem será enviada
    const numero1 = 'https://wa.me/+558382155088?text=' + encodeURIComponent(mensagemFormatada);
    const numero2 = 'https://wa.me/+5583996750737?text=' + encodeURIComponent(mensagemFormatada);

    // Enviar mensagem para os dois números
    window.open(numero1, '_blank');  // Enviar para o primeiro número
    window.open(numero2, '_blank');  // Enviar para o segundo número
    
    // Limpar campos após envio
    document.getElementById('nome').value = '';
    document.getElementById('mensagem').value = '';
  }
});
