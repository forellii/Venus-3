const title = document.getElementById("text");
const text = 'Olá, denovo...'
let index = 0;

function typeWriter() {
    if (index < text.length) {
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 200);
    }
}

typeWriter();