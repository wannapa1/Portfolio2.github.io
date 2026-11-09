// ==============================
// แสดงปีปัจจุบัน
// ==============================

const year = new Date().getFullYear();

document.getElementById("year").textContent = year;


// ==============================
// เอฟเฟกต์เมื่อเลื่อนหน้า
// ==============================

const cards = document.querySelectorAll(
    ".about-card, .info-card, .project-card, .skill"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.classList.add("hidden");

    observer.observe(card);

});


// ==============================
// เพิ่ม CSS สำหรับ Animation
// ==============================

const animationStyle = document.createElement("style");

animationStyle.textContent = `

.hidden {
    opacity: 0;
    transform: translateY(30px);
    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}

.show {
    opacity: 1;
    transform: translateY(0);
}

`;

document.head.appendChild(animationStyle);


// ==============================
// กดเมนูแล้วเลื่อนไปยังส่วนต่าง ๆ
// ==============================

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ==============================
// แสดงข้อความต้อนรับใน Console
// ==============================

console.log(
    "ยินดีต้อนรับสู่ Portfolio ของ นางสาวปภาพินท์ ชัยรัตน์ 💜"
);
