const criadorId = 'admin'; // Identificador do criador do aplicativo

document.getElementById('form-homenagem').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
  
    if (nome && mensagem) {
        // Números de WhatsApp para enviar a mensagem
        const numero1 = '5583996750737'; // Substitua com o número real
        const numero2 = '5511888888888'; // Substitua com o número real

        // Codificar a mensagem para ser usada na URL
        const mensagemCodificada = encodeURIComponent(`${nome}: ${mensagem}`);
        
        // Criar o link para enviar a mensagem para o WhatsApp dos dois números
        const linkWhatsApp1 = `https://wa.me/${numero1}?text=${mensagemCodificada}`;
        const linkWhatsApp2 = `https://wa.me/${numero2}?text=${mensagemCodificada}`;
        
        // Abrir os links em novas abas para enviar a mensagem automaticamente
        window.open(linkWhatsApp1, '_blank');
        window.open(linkWhatsApp2, '_blank');

        // Limpar campos após enviar a mensagem
        document.getElementById('nome').value = '';
        document.getElementById('mensagem').value = '';
    }
});
