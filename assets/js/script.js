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