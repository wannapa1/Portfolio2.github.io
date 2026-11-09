

/* =====================================
   BEAM PORTFOLIO | JAVASCRIPT
===================================== */

// 1. แสดงปีปัจจุบันใน Footer
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// 2. Scroll Reveal Animation
const revealElements = document.querySelectorAll(
    ".hero-text, .hero-image, .section-title, " +
    ".info-card, .education, .skill-card, .activity-card, .dream"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// 3. Active Navigation
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});


// 4. Back To Top Button
const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";
backToTop.setAttribute("aria-label", "กลับขึ้นด้านบน");

backToTop.style.cssText = `
    position: fixed;
    right: 25px;
    bottom: 25px;
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    background: linear-gradient(135deg, #7041a6, #b17bd2);
    color: white;
    font-size: 25px;
    cursor: pointer;
    box-shadow: 0 5px 20px rgba(112,65,166,0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
    transition: 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";
        backToTop.style.transform = "translateY(0)";
    } else {
        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";
        backToTop.style.transform = "translateY(15px)";
    }

});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// 5. Activity Card Hover Effect
const cards = document.querySelectorAll(".activity-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transition = "0.3s ease";
    });

});


// 6. Profile Image Loading Effect
const profileImage = document.querySelector(".hero-image img");

if (profileImage) {

    profileImage.addEventListener("load", () => {
        profileImage.classList.add("loaded");
    });

    if (profileImage.complete) {
        profileImage.classList.add("loaded");
    }

}


// 7. Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// 8. Console Welcome Message
console.log(
    "%c Welcome to BEAM Portfolio ",
    "background:#7041a6;color:white;padding:10px;font-size:16px;border-radius:8px;"
);

console.log("Designed by Kamollak Swasdiwong");

