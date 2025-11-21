//GET OUT

count = 0
const logo = document.getElementById('logo');
logo.classList.add('float');
logo.addEventListener('click', () => {
    count += 1;
    if (count === 10) {
        logo.classList.add('flip');
        logo.classList.remove('float');
        setTimeout(() => {
        logo.classList.remove('flip');}, 1000);
        logo.classList.add('float');
        count = 0;
    }
    
});