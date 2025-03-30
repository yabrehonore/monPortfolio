// script.js
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    // Gérer le clic sur le bouton menu
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // Masquer le menu lorsqu'un lien est cliqué (optionnel)
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });

    // Gérer les étoiles de compétences (votre code existant)
    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {
        const stars = skill.querySelectorAll(".star");
        const rating = parseInt(skill.querySelector(".stars").getAttribute("data-rating"));

        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add("active");
            }
        });
    });
});