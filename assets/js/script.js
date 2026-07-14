const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const abierto = navMenu.classList.toggle('abierto');
        menuToggle.setAttribute('aria-expanded', abierto);
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('abierto');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}


const elementosReveal = document.querySelectorAll('.reveal');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15, 
    rootMargin: '0px 0px -50px 0px'
});

elementosReveal.forEach((el) => observador.observe(el));

const header = document.querySelector('header');
const footer = document.querySelector('footer');

if (header && footer) {
    const observadorFooter = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            header.classList.toggle('oculto', entrada.isIntersecting);
        });
    }, {
        threshold: 0.1 
    });

    observadorFooter.observe(footer);
}