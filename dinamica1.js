document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidad de Cambio de Tema (Modo Claro / Modo Oscuro)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        const isDarkMode = body.getAttribute('data-theme') === 'dark';

        if (isDarkMode) {
            body.removeAttribute('data-theme');
            themeToggleBtn.textContent = '🌙 Modo Oscuro';
        } else {
            body.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = '☀️ Modo Claro';
        }
    });

    // 2. Interacción con los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Quitar clase active a todos los enlaces
            navLinks.forEach(l => l.classList.remove('active'));
            // Añadir clase active al enlace clickeado
            e.target.classList.add('active');
        });
    });

    // 3. Feedback dinámico en botones de tarjetas
    const cardButtons = document.querySelectorAll('.btn-card');

    cardButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const cardTitle = e.target.parentElement.querySelector('h3').textContent;
            alert(`¡Gracias por tu interés en: ${cardTitle}! Próximamente te daremos más información.`);
        });
    });
});