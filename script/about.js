const galactbox = document.getElementById('box');
const galact = document.querySelector('.galact');
const btnClose = document.getElementById('btn-close');

galact.addEventListener('click', () => {
    galactbox.classList.add('opened');
});
btnClose.addEventListener('click', () => {
    galactbox.classList.remove('opened');
});

const forside = document.getElementById('for-side');
const fore = document.querySelector('.for');
const closeFore = document.getElementById('close-for');

fore.addEventListener('click', () => {
    forside.classList.add('opened');
});
closeFore.addEventListener('click', () => {
    forside.classList.remove('opened');
});

const cleside = document.getElementById('cle-side');
const cle = document.querySelector('.cle');
const closeCle = document.getElementById('close-cle');

cle.addEventListener('click', () => {
    cleside.classList.add('opened');
});
closeCle.addEventListener('click', () => {
    cleside.classList.remove('opened');
});

const menu = document.getElementById('header');
const btnOpen = document.getElementById('btn-open');
const headertop = document.querySelector('.header-top');

btnOpen.addEventListener('click', () => {
    menu.classList.toggle('open');
    headertop.classList.toggle('up');
});

const yt = document.getElementById('yt')
yt.addEventListener('click', () => {
    window.open('https://youtube.com/@forelliii' , '_blank');
});
const ttk = document.getElementById('ttk')
ttk.addEventListener('click', () => {
    window.open('https://www.tiktok.com/@forellii' , '_blank');
});
const dc = document.getElementById('dc')
dc.addEventListener('click', () => {
    window.open('https://discord.gg/wgYH9KQXUK' , '_blank');
});
const ig = document.getElementById('ig')
ig.addEventListener('click', () => {
    window.open('https://www.instagram.com/forelliii/' , '_blank');
});