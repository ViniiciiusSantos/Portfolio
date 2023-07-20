const iconMenu = document.querySelector('.icone-menu');
const ul = document.querySelector('ul');
const fechar = document.querySelector('.fechar-menu');

function abrirMenu() {
    ul.classList.toggle('active');
}

function fecharMenu() {
    ul.classList.remove('active')
}

fechar.addEventListener('click', fecharMenu);
iconMenu.addEventListener('click', abrirMenu);