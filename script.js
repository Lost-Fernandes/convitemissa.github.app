// Controle do áudio
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('fundo-musical');

  // Tenta reproduzir o áudio automaticamente
  audio.muted = false; // Remove o mute
  audio.play().catch(() => {
    console.log("Autoplay bloqueado pelo navegador. O áudio só será reproduzido após interação do usuário.");
  });
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
