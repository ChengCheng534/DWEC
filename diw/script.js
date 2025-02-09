const coches = document.querySelector('.coches');
const totalCoches = document.querySelectorAll('.coche').length;
let index = 0;

document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % totalCoches;
    updateCarrusel();
});

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + totalCoches) % totalCoches;
    updateCarrusel();
});

function updateCarrusel() {
    coches.style.transform = `translateX(-${index * 100}vw)`;
}

// Desplazamiento automático cada 5 segundos
setInterval(() => {
    index = (index + 1) % totalCoches;
    updateCarrusel();
}, 5000);
