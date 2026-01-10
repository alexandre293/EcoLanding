document.addEventListener("DOMContentLoaded", () => {
    const toggleAvisBtn = document.getElementById("toggleAvis");
    const avisModal = document.getElementById("avis");
    const avisOverlay = document.getElementById("avisOverlay");
    const avisClose = document.getElementById("avisClose");
    const avisForm = document.getElementById("avisForm");
    const avisSuccess = document.getElementById("avisSuccess");

    function openAvis() {
        if (!avisModal) return;
        avisModal.classList.add("is-open");
        if (avisOverlay) avisOverlay.classList.add("is-open");
        avisModal.setAttribute("aria-hidden", "false");
        if (toggleAvisBtn) toggleAvisBtn.setAttribute("aria-expanded", "true");
        document.body.classList.add('modal-open');
        // focus sur le premier champ
        if (avisForm) {
            const first = avisForm.querySelector('input, textarea, select, button');
            first && first.focus();
        } else {
            avisModal.focus();
        }
        if (toggleAvisBtn) toggleAvisBtn.textContent = "❌ Fermer les avis";
    }

    function closeAvis() {
        if (!avisModal) return;
        avisModal.classList.remove("is-open");
        if (avisOverlay) avisOverlay.classList.remove("is-open");
        avisModal.setAttribute("aria-hidden", "true");
        if (toggleAvisBtn) toggleAvisBtn.setAttribute("aria-expanded", "false");
        document.body.classList.remove('modal-open');
        if (toggleAvisBtn) toggleAvisBtn.textContent = "⭐ Laisser un avis";
        toggleAvisBtn && toggleAvisBtn.focus();
    }

    if (toggleAvisBtn) {
        toggleAvisBtn.addEventListener("click", () => {
            const isOpen = avisModal && avisModal.classList.contains("is-open");
            if (isOpen) closeAvis();
            else openAvis();
        });
    }

    if (avisClose) avisClose.addEventListener("click", closeAvis);
    if (avisOverlay) avisOverlay.addEventListener("click", closeAvis);

    // Fermer avec Echap et focus trap
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (avisModal && avisModal.classList.contains("is-open")) closeAvis();
        }

        if (e.key === "Tab" && avisModal && avisModal.classList.contains("is-open")) {
            const focusable = avisModal.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (!first) {
                e.preventDefault();
                return;
            }
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    last.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === last) {
                    first.focus();
                    e.preventDefault();
                }
            }
        }
    });

    // Submit faux (JS) pour confirmation et éviter reflow
    if (avisForm) {
        avisForm.addEventListener('submit', (ev) => {
            ev.preventDefault();
            if (avisSuccess) {
                avisSuccess.style.display = 'block';
            }
            // reset, fermer après 1.6s
            setTimeout(() => {
                if (avisSuccess) avisSuccess.style.display = 'none';
                avisForm.reset();
                closeAvis();
            }, 1600);
        });
    }

    const contactBtn = document.getElementById("contactBtn");
    const contactPanel = document.getElementById("contactPanel");
    const contactClose = document.getElementById("contactClose");
    const contactOverlay = document.getElementById("contactOverlay");

    function openContact() {
        if (!contactPanel) return;
        contactPanel.classList.add("is-open");
        if (contactOverlay) contactOverlay.classList.add("is-open");
        contactPanel.setAttribute("aria-hidden", "false");
        if (contactBtn) contactBtn.setAttribute("aria-expanded", "true");
        const focusTarget = document.getElementById("userQuestion") || contactClose || contactPanel;
        focusTarget && focusTarget.focus();
    }

    function closeContact() {
        if (!contactPanel) return;
        contactPanel.classList.remove("is-open");
        if (contactOverlay) contactOverlay.classList.remove("is-open");
        contactPanel.setAttribute("aria-hidden", "true");
        if (contactBtn) contactBtn.setAttribute("aria-expanded", "false");
        if (contactBtn) contactBtn.focus();
    }

    if (contactBtn) {
        contactBtn.addEventListener("click", () => {
            const isOpen = contactPanel && contactPanel.classList.contains("is-open");
            if (isOpen) closeContact();
            else openContact();
        });
    }

    if (contactClose) contactClose.addEventListener("click", closeContact);
    if (contactOverlay) contactOverlay.addEventListener("click", closeContact);

    // Fermer avec Echap et gestion du focus (focus trap)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (contactPanel && contactPanel.classList.contains("is-open")) closeContact();
        }

        if (e.key === "Tab" && contactPanel && contactPanel.classList.contains("is-open")) {
            const focusable = contactPanel.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
            const first = focusable[0];
            const last = focusable[focusable.length -1];
            if (!first) {
                e.preventDefault();
                return;
            }
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    last.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === last) {
                    first.focus();
                    e.preventDefault();
                }
            }
        }
    });



});

