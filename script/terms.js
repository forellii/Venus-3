const menu = document.getElementById('menu');
const btnOpen = document.getElementById('btn-open');

btnOpen.addEventListener('click', () => {
    menu.classList.toggle('open');
});