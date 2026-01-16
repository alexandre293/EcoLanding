document.addEventListener("DOMContentLoaded", () => {

    /* ======================
       AVIS
    ====================== */

    const toggleAvisBtn = document.getElementById("toggleAvis");
    const avisModal = document.getElementById("avis");
    const avisOverlay = document.getElementById("avisOverlay");
    const avisClose = document.getElementById("avisClose");
    const avisForm = document.getElementById("avisForm");
    const avisSuccess = document.getElementById("avisSuccess");

    if (toggleAvisBtn && avisModal) {

        const openAvis = () => {
            avisModal.classList.add("avis-visible");
            avisOverlay && avisOverlay.classList.add("is-open");

            avisModal.setAttribute("aria-hidden", "false");
            toggleAvisBtn.setAttribute("aria-expanded", "true");

            toggleAvisBtn.classList.add("is-open");
            toggleAvisBtn.textContent = "Fermer les avis";

            document.body.style.overflow = "hidden";

            const firstInput = avisModal.querySelector("input, textarea, select, button");
            firstInput && firstInput.focus({ preventScroll: true });
        };

        const closeAvis = () => {
            avisModal.classList.remove("avis-visible");
            avisOverlay && avisOverlay.classList.remove("is-open");

            avisModal.setAttribute("aria-hidden", "true");
            toggleAvisBtn.setAttribute("aria-expanded", "false");

            toggleAvisBtn.classList.remove("is-open");
            toggleAvisBtn.textContent = "Laisser un avis";

            document.body.style.overflow = "";
            toggleAvisBtn.focus();
        };

        toggleAvisBtn.addEventListener("click", () => {
            avisModal.classList.contains("avis-visible")
                ? closeAvis()
                : openAvis();
        });

        avisClose && avisClose.addEventListener("click", closeAvis);
        avisOverlay && avisOverlay.addEventListener("click", closeAvis);

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && avisModal.classList.contains("avis-visible")) {
                closeAvis();
            }
        });

        avisForm && avisForm.addEventListener("submit", (e) => {
            e.preventDefault();

            avisSuccess.style.display = "block";

            setTimeout(() => {
                avisSuccess.style.display = "none";
                avisForm.reset();
                closeAvis();
            }, 1500);
        });
    }

    /* ======================
       CONTACT
    ====================== */

    const contactBtn = document.getElementById("contactBtn");
    const contactPanel = document.getElementById("contactPanel");
    const contactClose = document.getElementById("contactClose");
    const userQuestion = document.getElementById("userQuestion");

    if (contactBtn && contactPanel && contactClose) {

        const openContact = () => {
            contactPanel.style.display = "block";
            userQuestion && userQuestion.focus({ preventScroll: true });
        };

        const closeContact = () => {
            contactPanel.style.display = "none";
        };

        contactBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            openContact();
        });

        contactClose.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeContact();
        });

        document.addEventListener("click", (e) => {
            if (
                contactPanel.style.display === "block" &&
                !contactPanel.contains(e.target) &&
                e.target !== contactBtn
            ) {
                closeContact();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeContact();
        });
    }

});
