const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";

        document.querySelectorAll(".menu a").forEach(link => {
            link.style.color = "#333";
        });

        document.querySelector(".logo h1").style.color = "#333";

        document.querySelectorAll(".iconos a").forEach(icon => {
            icon.style.color = "#333";
        });

    }else{

        header.style.background = "transparent";
        header.style.boxShadow = "none";

        document.querySelectorAll(".menu a").forEach(link => {
            link.style.color = "#fff";
        });

        document.querySelector(".logo h1").style.color = "#fff";

        document.querySelectorAll(".iconos a").forEach(icon => {
            icon.style.color = "#fff";
        });

    }

});


let ultimoScroll = 0;

window.addEventListener("scroll", ()=>{

    let scrollActual = window.pageYOffset;

    if(scrollActual > ultimoScroll){

        header.style.top = "-100px";

    }else{

        header.style.top = "0";

    }

    ultimoScroll = scrollActual;

});


const botones = document.querySelectorAll("a");

botones.forEach(boton=>{

    boton.addEventListener("mouseenter",()=>{

        boton.style.transition=".3s";
        boton.style.transform="scale(1.05)";

    });

    boton.addEventListener("mouseleave",()=>{

        boton.style.transform="scale(1)";

    });

});