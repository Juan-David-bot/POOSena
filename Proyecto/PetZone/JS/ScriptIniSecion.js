document.addEventListener("DOMContentLoaded", () => {

    const correo = document.getElementById("correo");
    const password = document.getElementById("password");
    const ojo = document.getElementById("ojo");
    const mensajeCorreo = document.getElementById("mensajeCorreo");
    const mensajePassword = document.getElementById("mensajePassword");
    const formulario = document.getElementById("formLogin");
    const modalError = document.getElementById("modalError");
    const modalExito = document.getElementById("modalExito");
    const cerrarModalError = document.getElementById("cerrarModalError");
    const cerrarModalExito = document.getElementById("cerrarModalExito");
    const mensajeError = document.getElementById("mensajeError");

    function togglePassword() {
        if (password.type === "password") {
            password.type = "text";
            ojo.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            password.type = "password";
            ojo.classList.replace("fa-eye-slash", "fa-eye");
        }
    }

    ojo.addEventListener("click", togglePassword);

    function validarCorreo() {
        const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const valor = correo.value.trim();
        if (valor === "") {
            mensajeCorreo.textContent = "";
            correo.classList.remove("error", "success");
            return;
        }
        if (expresion.test(valor)) {
            mensajeCorreo.textContent = "✔ Correo válido";
            mensajeCorreo.style.color = "green";
            correo.classList.remove("error");
            correo.classList.add("success");
        } else {
            mensajeCorreo.textContent = "✖ Correo inválido";
            mensajeCorreo.style.color = "red";
            correo.classList.remove("success");
            correo.classList.add("error");
        }
    }

    correo.addEventListener("input", validarCorreo);

    function validarPassword() {
        const valor = password.value.trim();
        if (valor === "") {
            mensajePassword.textContent = "";
            password.classList.remove("error", "success");
            return;
        }
        if (valor.length >= 8) {
            mensajePassword.textContent = "✔ Contraseña válida";
            mensajePassword.style.color = "green";
            password.classList.remove("error");
            password.classList.add("success");
        } else {
            mensajePassword.textContent = "✖ Mínimo 8 caracteres";
            mensajePassword.style.color = "red";
            password.classList.remove("success");
            password.classList.add("error");
        }
    }

    password.addEventListener("input", validarPassword);

    function cerrarModales() {
        modalError.style.display = "none";
        modalExito.style.display = "none";
    }

    cerrarModalError.addEventListener("click", () => {
        modalError.style.display = "none";
    });

    cerrarModalExito.addEventListener("click", () => {
        modalExito.style.display = "none";
        window.location.href = "index.html";
    });

    modalError.addEventListener("click", (e) => {
        if (e.target === modalError) {
            modalError.style.display = "none";
        }
    });

    modalExito.addEventListener("click", (e) => {
        if (e.target === modalExito) {
            modalExito.style.display = "none";
            window.location.href = "index.html";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            cerrarModales();
        }
    });

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim());
        const passwordValida = password.value.trim().length >= 8;

        if (!correoValido) {
            mensajeError.textContent = "Correo electrónico inválido.";
            modalError.style.display = "flex";
            return;
        }

        if (!passwordValida) {
            mensajeError.textContent = "Contraseña inválida (mínimo 8 caracteres).";
            modalError.style.display = "flex";
            return;
        }

        modalExito.style.display = "flex";
    });

});