document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".neon-box");

    const observerOptions = {
        root: null, // Verwendet das Browser-Fenster als Basis
        threshold: 0.15, // Löst aus, sobald 15% der Box sichtbar sind
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target); // Verhindert doppeltes Animieren beim Hochscrollen
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add("fade-in-hidden"); // Startzustand zuweisen
        sectionObserver.observe(section);
    });
});
