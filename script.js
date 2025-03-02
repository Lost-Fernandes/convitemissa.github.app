const criadorId = 'admin'; // Identificador do criador do aplicativo

// Função para carregar mensagens salvas no LocalStorage
function carregarMensagens() {
    const container = document.getElementById('mensagens-container');
    const mensagens = JSON.parse(localStorage.getItem('mensagens')) || []; // Recupera as mensagens salvas

    mensagens.forEach(mensagem => {
        const novaMensagem = document.createElement('div');
        novaMensagem.classList.add('mensagem-item');
        novaMensagem.innerHTML = `
            <strong>${mensagem.nome}:</strong> <p>${mensagem.mensagem}</p>
        `;
        
        if (mensagem.nome === criadorId) {
            const botaoExcluir = document.createElement('button');
            botaoExcluir.textContent = 'Excluir';
            botaoExcluir.classList.add('excluir-btn');
            botaoExcluir.addEventListener('click', function() {
                removerMensagem(mensagem);
            });
            novaMensagem.appendChild(botaoExcluir);
        }
        
        container.appendChild(novaMensagem);
    });
}

// Função para adicionar uma nova mensagem e salvar no LocalStorage
function adicionarMensagem(nome, mensagem) {
    const container = document.getElementById('mensagens-container');
    const novaMensagem = document.createElement('div');
    novaMensagem.classList.add('mensagem-item');
    
    novaMensagem.innerHTML = `
        <strong>${nome}:</strong> <p>${mensagem}</p>
    `;
    
    const mensagens = JSON.parse(localStorage.getItem('mensagens')) || []; // Recupera as mensagens salvas
    mensagens.push({ nome, mensagem }); // Adiciona a nova mensagem
    localStorage.setItem('mensagens', JSON.stringify(mensagens)); // Salva novamente no LocalStorage

    if (nome === criadorId) {
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.classList.add('excluir-btn');
        botaoExcluir.addEventListener('click', function() {
            removerMensagem({ nome, mensagem });
        });
        novaMensagem.appendChild(botaoExcluir);
    }
    
    container.appendChild(novaMensagem);
}

// Função para remover uma mensagem e atualizar o LocalStorage
function removerMensagem(mensagemRemover) {
    const mensagens = JSON.parse(localStorage.getItem('mensagens')) || [];
    const mensagensAtualizadas = mensagens.filter(mensagem => mensagem.mensagem !== mensagemRemover.mensagem); // Remove a mensagem
    localStorage.setItem('mensagens', JSON.stringify(mensagensAtualizadas)); // Atualiza o LocalStorage

    // Atualiza o DOM
    const container = document.getElementById('mensagens-container');
    container.innerHTML = ''; // Limpa o container de mensagens
    carregarMensagens(); // Carrega novamente as mensagens restantes
}

document.getElementById('form-homenagem').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
  
    if (nome && mensagem) {
        adicionarMensagem(nome, mensagem);  // Adiciona a mensagem ao LocalStorage e ao DOM
        
        // Limpar campos após adicionar a mensagem
        document.getElementById('nome').value = '';
        document.getElementById('mensagem').value = '';
    }
});

// Carregar as mensagens ao iniciar a página
window.onload = carregarMensagens;
