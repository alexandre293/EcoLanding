document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggleAvis");
    const avis = document.getElementById("avis");

    btn.addEventListener("click", () => {
        avis.classList.toggle("avis-hidden");
        avis.classList.toggle("avis-visible");

        btn.textContent = avis.classList.contains("avis-visible")
            ? "❌ Fermer les avis"
            : "⭐ Laisser un avis";

        if (avis.classList.contains("avis-visible")) {
            avis.scrollIntoView({ behavior: "smooth" });
        }
    });

    const contactBtn = document.getElementById("contactBtn");
    const contactPanel = document.getElementById("contactPanel");
    const contactClose = document.getElementById("contactClose");
    const contactOverlay = document.getElementById("contactOverlay");

    function openContact() {
        contactPanel.classList.add("is-open");
        contactOverlay.classList.add("is-open");
        contactPanel.setAttribute("aria-hidden", "false");
    }

    function closeContact() {
        contactPanel.classList.remove("is-open");
        contactOverlay.classList.remove("is-open");
        contactPanel.setAttribute("aria-hidden", "true");
    }

    contactBtn.addEventListener("click", () => {
        const isOpen = contactPanel.classList.contains("is-open");
        if (isOpen) closeContact();
        else openContact();
    });

    contactClose.addEventListener("click", closeContact);

    // Fermer en cliquant en dehors
    contactOverlay.addEventListener("click", closeContact);

    // Fermer avec Echap
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeContact();

    });



});

