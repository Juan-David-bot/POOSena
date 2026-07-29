document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector("aside button");

    menu.addEventListener("click", () => {
        alert("Aquí se mostrará el menú completo de categorías.");
    });


    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach(enlace => {

        enlace.addEventListener("click", function (e) {

            const texto = this.textContent.trim();

            if (texto === "Registrarse") {
                return;
            }

            e.preventDefault();

            switch (texto) {

                case "Productos":
                    alert("Aquí se mostrarán todos los productos.");
                    break;

                case "Soporte":
                    alert("Página de soporte en construcción.");
                    break;

                case "Carrito":
                    alert("El carrito de compras está vacío.");
                    break;

                case "Iniciar sesión":
                    alert("Próximamente podrás iniciar sesión.");
                    break;

            }

        });

    });


    const buscador = document.querySelector(".buscador input");

    buscador.addEventListener("keypress", function(e){

        if(e.key === "Enter"){

            if(this.value.trim() === ""){
                alert("Escribe un producto para buscar.");
            }else{
                alert("Buscando: " + this.value);
            }

        }

    });


    const categorias = document.querySelectorAll("aside ul li");

    categorias.forEach(categoria => {

        categoria.addEventListener("click", () => {

            alert("Categoría seleccionada: " + categoria.textContent);

        });

    });


    const ordenar = document.querySelectorAll(".ordenar button");

    ordenar.forEach(boton => {

        boton.addEventListener("click", () => {

            alert("Ordenando por: " + boton.textContent);

        });

    });


    const agregar = document.querySelectorAll(".producto button");

    agregar.forEach(boton => {

        boton.addEventListener("click", () => {

            alert("Producto agregado al carrito.");

        });

    });

});

