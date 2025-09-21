const menu = document.getElementById('header');
const btnOpen = document.getElementById('btn-open');
const headertop = document.querySelector('.header-top');

btnOpen.addEventListener('click', () => {
    menu.classList.toggle('open');
    headertop.classList.toggle('up');
});


let count = 1;
document.getElementById("radio1").checked = true;
const btnNext = document.getElementById('dir');
const btnPrev = document.getElementById('esq');

function next() {
    count++;
    if (count > 13) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

btnNext.addEventListener('click', () => {
    next();
});
function prev() {
    count--;
    if (count < 1) {
        count = 13;
    }
    document.getElementById("radio" + count).checked = true;
}
btnPrev.addEventListener('click', () => {
    prev();
});