// =====================================
// NEXUS TECH APP.JS
// =====================================

// MODO OSCURO / CLARO

const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});

// =====================================
// CONTADORES ANIMADOS
// =====================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            const updateCounter = () => {

                count += speed;

                if(count < target){

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {threshold: 0.5});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// =====================================
// FAQ DESPLEGABLE
// =====================================

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.display === "block"){

            answer.style.display = "none";

        } else {

            answer.style.display = "block";

        }

    });

});

// =====================================
// NAVBAR INTELIGENTE
// =====================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(0,0,0,.75)";
        navbar.style.backdropFilter = "blur(20px)";

    } else {

        navbar.style.background = "rgba(0,0,0,.3)";
        navbar.style.backdropFilter = "blur(15px)";

    }

});

// =====================================
// APARICIÓN AL HACER SCROLL
// =====================================

const hiddenElements = document.querySelectorAll(
".section, .stat-card, .product-card, .service-card, .vision-card"
);

hiddenElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all .8s ease";

});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

hiddenElements.forEach(el => {

    revealObserver.observe(el);

});

// =====================================
// FORMULARIO
// =====================================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Gracias por contactar con NEXUS TECH. Te responderemos pronto."
    );

    form.reset();

});

// =====================================
// EFECTO PARALLAX HERO
// =====================================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    let value = window.scrollY;

    hero.style.backgroundPositionY = value * 0.5 + "px";

});