document.addEventListener("DOMContentLoaded", () => {
    
    // === 1. FADE-IN ANIMATION FÜR SCROLLEN ===
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


    // === 2. DISCORD LIVE-ZÄHLER ===
    const inviteCode = "XM9CXWH9rr"; 
    
    // REPARIERT: Vollständige offizielle API-Adresse inklusive v10-Invites-Pfad
    fetch(`https://discord.com{inviteCode}?with_counts=true`)
        .then(response => response.json())
        .then(data => {
            if (data && data.approximate_presence_count !== undefined) {
                const onlineCount = data.approximate_presence_count;
                document.getElementById("discord-online-text").innerText = `${onlineCount} Mitglieder online`;
            } else {
                document.getElementById("discord-online-text").innerText = "Discord Online";
            }
        })
        .catch(() => {
            document.getElementById("discord-online-text").innerText = "Discord Online";
        });
        
});
