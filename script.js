const criadorId = 'admin'; // Identificador do criador do aplicativo 

document.getElementById('form-homenagem').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
  
    if (nome && mensagem) {
        const container = document.getElementById('mensagens-container');
        const novaMensagem = document.createElement('div');
        novaMensagem.classList.add('mensagem-item');
        
        // Criar a mensagem HTML
        novaMensagem.innerHTML = `
            <strong>${nome}:</strong> <p>${mensagem}</p>
        `;
        
        // Adicionar botão de exclusão apenas se o nome for o do criador
        if (nome === criadorId) {
            const botaoExcluir = document.createElement('button');
            botaoExcluir.textContent = 'Excluir';
            botaoExcluir.classList.add('excluir-btn');
            botaoExcluir.addEventListener('click', function() {
                container.removeChild(novaMensagem);
            });
            
            novaMensagem.appendChild(botaoExcluir);
        }
  
        container.appendChild(novaMensagem);  // Adicionar nova mensagem ao container
  
        // Limpar campos após adicionar a mensagem
        document.getElementById('nome').value = '';
        document.getElementById('mensagem').value = '';
    }
});
