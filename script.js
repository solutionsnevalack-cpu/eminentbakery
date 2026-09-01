/* =====================================================
   EMMANICETA BAKERY
   Main JavaScript
   ===================================================== */


/* =====================================================
   1. MOBILE NAVIGATION
   ===================================================== */

const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("mobile-open");
});


/* Close mobile menu when a link is clicked */

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("mobile-open");
    });
});


/* =====================================================
   2. MENU FILTERING
   ===================================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active class from all buttons */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Add active class to clicked button */

        button.classList.add("active");

        /* Get selected category */

        const selectedCategory = button.dataset.filter;


        /* Filter products */

        productCards.forEach(card => {

            const productCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === productCategory
            ) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 50);

            } else {

                card.style.opacity = "0";
                card.style.transform = "translateY(15px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 300);

            }

        });

    });

});


/* =====================================================
   3. WHATSAPP ORDERING
   ===================================================== */

const orderButtons = document.querySelectorAll(".order-product");

const whatsappNumber = "2348036317805";

orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        const productCard = button.closest(".product-card");

        const productName =
            productCard.querySelector("h3").textContent;

        const productPrice =
            productCard.querySelector(".price").textContent;


        const message =
            `Hello Emmaniceta Bakery! 👋%0A%0A` +
            `I would like to order:%0A` +
            `🍰 ${productName}%0A` +
            `💰 Price: ${productPrice}%0A%0A` +
            `Please let me know how I can proceed with my order. Thank you!`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${message}`;


        window.open(whatsappURL, "_blank");

    });

});


/* =====================================================
   4. NAVBAR SCROLL EFFECT
   ===================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 8px 25px rgba(43, 26, 18, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =====================================================
   5. ACTIVE NAVIGATION LINK
   ===================================================== */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

});


/* =====================================================
   6. SCROLL REVEAL ANIMATION
   ===================================================== */

const revealElements = document.querySelectorAll(
    ".feature-card, .product-card, .about-image, .about-content, .gallery-item, .contact-card"
);


/* Initial state */

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


/* Intersection Observer */

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =====================================================
   7. HERO IMAGE FLOATING EFFECT
   ===================================================== */

const heroImage = document.querySelector(".hero-image-wrapper");

if (heroImage) {

    let position = 0;
    let direction = 1;

    setInterval(() => {

        position += 0.15 * direction;

        if (position > 8) {
            direction = -1;
        }

        if (position < 0) {
            direction = 1;
        }

        heroImage.style.transform =
            `translateY(${position}px)`;

    }, 30);

}


/* =====================================================
   8. CURRENT YEAR
   ===================================================== */

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} Emmaniceta Bakery. All Rights Reserved.`;

}


/* =====================================================
   9. PREVENT BROKEN IMAGE EXPERIENCE
   ===================================================== */

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("error", () => {

        image.style.background = "#fff0dc";

        image.style.minHeight = "100px";

    });

});