// Função para abrir o menu
function openMenu() {
    document.getElementById("menuLateral").style.width = "250px";  // Expande o menu
    document.body.classList.add("menu-open"); // Adiciona a classe para mover o conteúdo
}

// Função para fechar o menu
function closeMenu() {
    document.getElementById("menuLateral").style.width = "0";  // Fecha o menu
    document.body.classList.remove("menu-open"); // Remove a classe para voltar ao layout normal
}