function showMoreInfo(title, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    
    // Adiciona o botão "Ver Portfólio" dentro do modal
    const extraButtonContainer = document.getElementById('extra-button');
    extraButtonContainer.innerHTML = ''; // Limpa o conteúdo para evitar duplicação
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Ver Portfólio';
    button.onclick = function() {
        // Ação do botão, como abrir um link para o portfólio
        window.open('https://link-para-o-portfolio.com', '_blank'); //colocar o PATH para templates/paginaprojeto.html
    };
    extraButtonContainer.appendChild(button);
    
    // Exibe o modal
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

  
  // Fecha o modal ao clicar fora do conteúdo
  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  