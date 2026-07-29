const header = document.querySelector("header");
const menuLinks = document.querySelectorAll(".menu a");
const iconosLinks = document.querySelectorAll(".iconos a");
const logo = document.querySelector(".logo h1");

window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 80;

    header.style.background = isScrolled ? "#ffffff" : "transparent";
    header.style.boxShadow = isScrolled ? "0 5px 15px rgba(0,0,0,.15)" : "none";

    const color = isScrolled ? "#333" : "#fff";
    menuLinks.forEach(link => link.style.color = color);
    iconosLinks.forEach(icon => icon.style.color = color);
    logo.style.color = color;

    document.querySelectorAll(".nav-adopt").forEach(link => {
        link.style.color = "#C17A5A";
    });
});

let ultimoScroll = 0;

window.addEventListener("scroll", () => {
    const scrollActual = window.pageYOffset;

    if (scrollActual > 100 && scrollActual > ultimoScroll) {
        header.style.top = "-100px";
    } else {
        header.style.top = "0";
    }

    ultimoScroll = scrollActual;
});

const botones = document.querySelectorAll("a:not(.logo):not(.menu a):not(.iconos a)");

botones.forEach(boton => {
    boton.addEventListener("mouseenter", () => {
        boton.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
        boton.style.transform = "translateY(-3px) scale(1.03)";
    });

    boton.addEventListener("mouseleave", () => {
        boton.style.transform = "translateY(0) scale(1)";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const secciones = document.querySelectorAll(".categorias, .productosDestacados, .adopcion, .asesoria, .blog, .beneficios, .opiniones");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 150);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    secciones.forEach(seccion => {
        seccion.style.opacity = "0";
        seccion.style.transform = "translateY(50px)";
        seccion.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        observer.observe(seccion);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const btnTop = document.createElement("button");
    btnTop.innerHTML = "↑";
    btnTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #C17A5A;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(193, 122, 90, 0.4);
        z-index: 999;
    `;
    document.body.appendChild(btnTop);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 400) {
            btnTop.style.opacity = "1";
            btnTop.style.visibility = "visible";
        } else {
            btnTop.style.opacity = "0";
            btnTop.style.visibility = "hidden";
        }
    });

    btnTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    btnTop.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-5px) scale(1.05)";
        this.style.boxShadow = "0 8px 25px rgba(193, 122, 90, 0.6)";
    });

    btnTop.addEventListener("mouseleave", function() {
        this.style.transform = "translateY(0) scale(1)";
        this.style.boxShadow = "0 4px 15px rgba(193, 122, 90, 0.4)";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu");

    const menuHamburguesa = document.createElement("button");
    menuHamburguesa.innerHTML = "☰";
    menuHamburguesa.style.cssText = `
        display: none;
        background: transparent;
        border: none;
        color: white;
        font-size: 28px;
        cursor: pointer;
        padding: 5px 10px;
        transition: all 0.3s ease;
    `;
    navbar.appendChild(menuHamburguesa);

    function toggleMenu() {
        if (menu.style.display === "flex") {
            menu.style.display = "none";
            menuHamburguesa.innerHTML = "☰";
            menuHamburguesa.style.color = "white";
        } else {
            menu.style.display = "flex";
            menuHamburguesa.innerHTML = "✕";
            menuHamburguesa.style.color = "#C17A5A";
        }
    }

    menuHamburguesa.addEventListener("click", toggleMenu);

    function handleMenuResponsive() {
        if (window.innerWidth <= 768) {
            menuHamburguesa.style.display = "block";
            menu.style.display = "none";
            menu.style.cssText = `
                display: none;
                flex-direction: column;
                position: absolute;
                top: 80px;
                left: 0;
                width: 100%;
                background: rgba(10, 10, 10, 0.95);
                backdrop-filter: blur(20px);
                padding: 20px;
                gap: 15px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                list-style: none;
                align-items: center;
            `;
            menu.querySelectorAll("a").forEach(link => {
                link.style.color = "white";
            });
        } else {
            menuHamburguesa.style.display = "none";
            menu.style.display = "flex";
            menu.style.cssText = `
                display: flex;
                list-style: none;
                gap: 40px;
                align-items: center;
            `;
            menu.querySelectorAll("a").forEach(link => {
                link.style.color = "";
            });
        }
    }

    window.addEventListener("resize", handleMenuResponsive);
    handleMenuResponsive();

    menu.querySelectorAll("a").forEach(enlace => {
        enlace.addEventListener("click", function() {
            if (window.innerWidth <= 768) {
                menu.style.display = "none";
                menuHamburguesa.innerHTML = "☰";
                menuHamburguesa.style.color = "white";
            }
        });
    });
});

console.log("%c🐾 PetZone", "font-size: 30px; font-weight: bold; color: #C17A5A;");
console.log("%cDonde el amor por las mascotas se vive", "font-size: 16px; color: #2EC4B6;");
console.log("%c❤️ Adopta, cuida y ama a tu mejor amigo", "font-size: 14px; color: #FFD166;");