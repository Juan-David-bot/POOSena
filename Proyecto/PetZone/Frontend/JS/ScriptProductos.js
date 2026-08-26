document.addEventListener("DOMContentLoaded", () => {

    const productos = [
        { id: 1, nombre: "Alimento Premium Perro Adulto", categoria: "alimentos", precio: 85000, precioAntiguo: null, emoji: "🍖", rating: 4.8, reviews: 124, etiqueta: "destacado" },
        { id: 2, nombre: "Alimento Gato Adulto", categoria: "alimentos", precio: 72000, precioAntiguo: null, emoji: "🐟", rating: 4.6, reviews: 89, etiqueta: null },
        { id: 3, nombre: "Pelota Interactiva", categoria: "juguetes", precio: 25000, precioAntiguo: 35000, emoji: "⚽", rating: 4.9, reviews: 203, etiqueta: "oferta" },
        { id: 4, nombre: "Rascador para Gatos", categoria: "juguetes", precio: 120000, precioAntiguo: null, emoji: "🐱", rating: 4.7, reviews: 67, etiqueta: null },
        { id: 5, nombre: "Cama Ortopédica Grande", categoria: "accesorios", precio: 180000, precioAntiguo: null, emoji: "🛏️", rating: 4.5, reviews: 45, etiqueta: "nuevo" },
        { id: 6, nombre: "Collar Antipulgas", categoria: "salud", precio: 45000, precioAntiguo: 55000, emoji: "💊", rating: 4.3, reviews: 78, etiqueta: "oferta" },
        { id: 7, nombre: "Shampoo Hipoalergénico", categoria: "higiene", precio: 38000, precioAntiguo: null, emoji: "🧴", rating: 4.4, reviews: 56, etiqueta: null },
        { id: 8, nombre: "Cepillo Dental para Perros", categoria: "higiene", precio: 22000, precioAntiguo: null, emoji: "🪥", rating: 4.2, reviews: 34, etiqueta: null },
        { id: 9, nombre: "Snacks Naturales", categoria: "alimentos", precio: 32000, precioAntiguo: 40000, emoji: "🦴", rating: 4.9, reviews: 312, etiqueta: "oferta" },
        { id: 10, nombre: "Juguete Cuerda", categoria: "juguetes", precio: 18000, precioAntiguo: null, emoji: "🪢", rating: 4.1, reviews: 23, etiqueta: null },
        { id: 11, nombre: "Bebedero Automático", categoria: "accesorios", precio: 95000, precioAntiguo: null, emoji: "💧", rating: 4.6, reviews: 89, etiqueta: "nuevo" },
        { id: 12, nombre: "Vitamina para Perros", categoria: "salud", precio: 28000, precioAntiguo: null, emoji: "💊", rating: 4.0, reviews: 45, etiqueta: null },
    ];

    const grid = document.getElementById("productosGrid");
    const buscador = document.getElementById("buscador");
    const filtrosBtns = document.querySelectorAll(".filtro-btn");
    const ordenarSelect = document.getElementById("ordenar");
    const paginaAnterior = document.getElementById("paginaAnterior");
    const paginaSiguiente = document.getElementById("paginaSiguiente");
    const paginasContainer = document.getElementById("paginas");

    let categoriaActual = "todos";
    let busquedaActual = "";
    let ordenActual = "default";
    let paginaActual = 1;
    const productosPorPagina = 8;

    function filtrarProductos() {
        let resultado = productos;

        if (categoriaActual !== "todos") {
            resultado = resultado.filter(p => p.categoria === categoriaActual);
        }

        if (busquedaActual.trim() !== "") {
            const query = busquedaActual.toLowerCase().trim();
            resultado = resultado.filter(p =>
                p.nombre.toLowerCase().includes(query) ||
                p.categoria.includes(query)
            );
        }

        return resultado;
    }

    function ordenarProductos(lista) {
        const copia = [...lista];
        switch (ordenActual) {
            case "precio-asc":
                return copia.sort((a, b) => a.precio - b.precio);
            case "precio-desc":
                return copia.sort((a, b) => b.precio - a.precio);
            case "nombre-asc":
                return copia.sort((a, b) => a.nombre.localeCompare(b.nombre));
            case "nombre-desc":
                return copia.sort((a, b) => b.nombre.localeCompare(a.nombre));
            default:
                return copia;
        }
    }

    function renderizarProductos() {
        const filtrados = filtrarProductos();
        const ordenados = ordenarProductos(filtrados);

        const totalPaginas = Math.ceil(ordenados.length / productosPorPagina);
        if (paginaActual > totalPaginas) paginaActual = Math.max(1, totalPaginas);

        const inicio = (paginaActual - 1) * productosPorPagina;
        const fin = inicio + productosPorPagina;
        const paginaProductos = ordenados.slice(inicio, fin);

        if (ordenados.length === 0) {
            grid.innerHTML = `
                <div class="sin-resultados">
                    <i class="fas fa-search"></i>
                    <h3>No encontramos productos</h3>
                    <p>Intenta con otra búsqueda o categoría</p>
                </div>
            `;
            actualizarPaginacion(0);
            return;
        }

        grid.innerHTML = paginaProductos.map(producto => `
            <div class="tarjeta-producto">
                <div class="imagen">
                    ${producto.emoji}
                    ${producto.etiqueta ? `<span class="etiqueta ${producto.etiqueta}">${producto.etiqueta}</span>` : ''}
                </div>
                <div class="info">
                    <div class="categoria">${producto.categoria}</div>
                    <h3>${producto.nombre}</h3>
                    <div class="precio">
                        $${producto.precio.toLocaleString()}
                        ${producto.precioAntiguo ? `<span class="antiguo">$${producto.precioAntiguo.toLocaleString()}</span>` : ''}
                    </div>
                    <div class="rating">
                        ${'★'.repeat(Math.floor(producto.rating))}${producto.rating % 1 >= 0.5 ? '★' : ''}
                        <span>(${producto.reviews})</span>
                    </div>
                    <button class="btn-agregar" data-id="${producto.id}">
                        <i class="fas fa-cart-plus"></i> Agregar
                    </button>
                </div>
            </div>
        `).join("");

        actualizarPaginacion(totalPaginas);

        document.querySelectorAll(".btn-agregar").forEach(btn => {
            btn.addEventListener("click", function() {
                const id = parseInt(this.dataset.id);
                const producto = productos.find(p => p.id === id);
                alert(`🛒 "${producto.nombre}" agregado al carrito`);
            });
        });
    }

    function actualizarPaginacion(total) {
        const totalPaginas = Math.max(1, total);

        paginasContainer.innerHTML = "";
        for (let i = 1; i <= Math.min(totalPaginas, 5); i++) {
            const btn = document.createElement("button");
            btn.className = `pagina-btn${i === paginaActual ? " active" : ""}`;
            btn.textContent = i;
            btn.addEventListener("click", () => {
                paginaActual = i;
                renderizarProductos();
            });
            paginasContainer.appendChild(btn);
        }

        paginaAnterior.disabled = paginaActual <= 1;
        paginaSiguiente.disabled = paginaActual >= totalPaginas;

        paginaAnterior.onclick = () => {
            if (paginaActual > 1) {
                paginaActual--;
                renderizarProductos();
            }
        };

        paginaSiguiente.onclick = () => {
            if (paginaActual < totalPaginas) {
                paginaActual++;
                renderizarProductos();
            }
        };
    }

    buscador.addEventListener("input", function() {
        busquedaActual = this.value;
        paginaActual = 1;
        renderizarProductos();
    });

    filtrosBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            filtrosBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            categoriaActual = this.dataset.categoria;
            paginaActual = 1;
            renderizarProductos();
        });
    });

    ordenarSelect.addEventListener("change", function() {
        ordenActual = this.value;
        paginaActual = 1;
        renderizarProductos();
    });

    renderizarProductos();

    // Efecto scroll header
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});