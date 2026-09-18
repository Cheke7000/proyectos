// Pequeñas interacciones para el portafolio.
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  // Entrada suave de las tarjetas cuando aparecen en pantalla.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 70}ms`;
    observer.observe(card);
  });

  // Año automático en el pie de página.
  const footer = document.querySelector("footer");
  if (footer) {
    const year = new Date().getFullYear();
    footer.querySelector("span:first-child").textContent = `Ezequiel Ayala · ${year}`;
  }
});
