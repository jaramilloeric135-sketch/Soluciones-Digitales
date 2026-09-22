document.addEventListener("DOMContentLoaded", () => {
    // Desplazamiento suave y resalte dinámico al hacer clic en los enlaces de navegación
    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            
            // Si el enlace apunta a un id válido de la página
            if (targetId.startsWith("#")) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Remover resaltes previos
                    document.querySelectorAll(".card").forEach(card => {
                        card.classList.remove("highlight-card");
                    });

                    // Si el elemento destino es una tarjeta, aplica el resalte visual
                    if (targetElement.classList.contains("card")) {
                        targetElement.classList.add("highlight-card");
                    }
                }
            }
        });
    });
});