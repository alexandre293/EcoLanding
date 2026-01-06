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



});

