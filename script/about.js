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