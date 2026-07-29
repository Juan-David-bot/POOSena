document.addEventListener("DOMContentLoaded", () => {

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const ojo = document.getElementById("ojo");
    const ojo2 = document.getElementById("ojo2");
    const correo = document.getElementById("correo");
    const mensajeCorreo = document.getElementById("mensajeCorreo");
    const nivel = document.getElementById("nivel");
    const textoSeguridad = document.getElementById("textoSeguridad");
    const mensajePassword = document.getElementById("mensajePassword");
    const barra = document.getElementById("barra");
    const formulario = document.getElementById("formRegistro");
    const modal = document.getElementById("modal");
    const cerrarModal = document.getElementById("cerrarModal");
    const campos = document.querySelectorAll(".formulario");
    const telefono = document.getElementById("telefono");
    const ciudad = document.getElementById("ciudad");
    const nombre = document.getElementById("nombre");
    const mensajeTelefono = document.getElementById("mensajeTelefono");
    const mensajeCiudad = document.getElementById("mensajeCiudad");
    const mensajeNombre = document.getElementById("mensajeNombre");
    const terminos = document.getElementById("terminos");

    function togglePassword(input, icon) {
        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    }

    ojo.addEventListener("click", () => togglePassword(password, ojo));
    ojo2.addEventListener("click", () => togglePassword(confirmPassword, ojo2));

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

    function validarTelefono() {
        const valor = telefono.value.trim();
        const expresion = /^[0-9]{7,15}$/;
        if (valor === "") {
            mensajeTelefono.textContent = "";
            telefono.classList.remove("error", "success");
            return;
        }
        if (expresion.test(valor.replace(/\s/g, ""))) {
            mensajeTelefono.textContent = "✔ Teléfono válido";
            mensajeTelefono.style.color = "green";
            telefono.classList.remove("error");
            telefono.classList.add("success");
        } else {
            mensajeTelefono.textContent = "✖ Ingresa un número válido (7-15 dígitos)";
            mensajeTelefono.style.color = "red";
            telefono.classList.remove("success");
            telefono.classList.add("error");
        }
    }

    telefono.addEventListener("input", validarTelefono);

    function validarCiudad() {
        const valor = ciudad.value.trim();
        if (valor === "") {
            mensajeCiudad.textContent = "";
            ciudad.classList.remove("error", "success");
            return;
        }
        if (valor.length >= 3) {
            mensajeCiudad.textContent = "✔ Ciudad válida";
            mensajeCiudad.style.color = "green";
            ciudad.classList.remove("error");
            ciudad.classList.add("success");
        } else {
            mensajeCiudad.textContent = "✖ Ingresa una ciudad válida";
            mensajeCiudad.style.color = "red";
            ciudad.classList.remove("success");
            ciudad.classList.add("error");
        }
    }

    ciudad.addEventListener("input", validarCiudad);

    function validarNombre() {
        const valor = nombre.value.trim();
        if (valor === "") {
            mensajeNombre.textContent = "";
            nombre.classList.remove("error", "success");
            return;
        }
        if (valor.length >= 3 && valor.split(" ").length >= 2) {
            mensajeNombre.textContent = "✔ Nombre completo válido";
            mensajeNombre.style.color = "green";
            nombre.classList.remove("error");
            nombre.classList.add("success");
        } else {
            mensajeNombre.textContent = "✖ Ingresa nombre y apellido";
            mensajeNombre.style.color = "red";
            nombre.classList.remove("success");
            nombre.classList.add("error");
        }
    }

    nombre.addEventListener("input", validarNombre);

    function validarPassword() {
        const valor = password.value;
        let fuerza = 0;

        if (valor.length >= 8) fuerza++;
        if (/[A-Z]/.test(valor)) fuerza++;
        if (/[0-9]/.test(valor)) fuerza++;
        if (/[@$!%*?&]/.test(valor)) fuerza++;

        const niveles = {
            0: { width: "0%", color: "", texto: "" },
            1: { width: "25%", color: "red", texto: "Contraseña débil" },
            2: { width: "50%", color: "orange", texto: "Contraseña media" },
            3: { width: "75%", color: "#eab308", texto: "Contraseña buena" },
            4: { width: "100%", color: "green", texto: "Contraseña fuerte" }
        };

        const nivelActual = niveles[fuerza];
        nivel.style.width = nivelActual.width;
        nivel.style.background = nivelActual.color;
        textoSeguridad.textContent = nivelActual.texto;
        textoSeguridad.style.color = nivelActual.color;

        if (valor === "") {
            nivel.style.width = "0%";
            textoSeguridad.textContent = "";
        }
    }

    password.addEventListener("input", validarPassword);

    function validarConfirmacion() {
        const valor = confirmPassword.value.trim();
        if (valor === "") {
            mensajePassword.textContent = "";
            confirmPassword.classList.remove("error", "success");
            return;
        }
        if (password.value === valor) {
            mensajePassword.textContent = "✔ Las contraseñas coinciden";
            mensajePassword.style.color = "green";
            confirmPassword.classList.remove("error");
            confirmPassword.classList.add("success");
        } else {
            mensajePassword.textContent = "✖ Las contraseñas no coinciden";
            mensajePassword.style.color = "red";
            confirmPassword.classList.remove("success");
            confirmPassword.classList.add("error");
        }
    }

    confirmPassword.addEventListener("input", validarConfirmacion);

    function actualizarBarra() {
        let llenos = 0;
        campos.forEach(input => {
            if (input.value.trim() !== "") {
                llenos++;
            }
        });
        const porcentaje = (llenos / campos.length) * 100;
        barra.style.width = porcentaje + "%";
    }

    campos.forEach(campo => {
        campo.addEventListener("input", actualizarBarra);
    });

    function validarFormulario() {
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim());
        const telefonoValido = /^[0-9]{7,15}$/.test(telefono.value.trim().replace(/\s/g, ""));
        const ciudadValida = ciudad.value.trim().length >= 3;
        const nombreValido = nombre.value.trim().length >= 3 && nombre.value.trim().split(" ").length >= 2;
        const passwordValida = password.value.length >= 8;
        const passwordsCoinciden = password.value === confirmPassword.value && confirmPassword.value !== "";
        const terminosAceptados = terminos.checked;

        let errores = [];

        if (!correoValido) errores.push("Correo electrónico inválido");
        if (!telefonoValido) errores.push("Teléfono inválido (mínimo 7 dígitos)");
        if (!ciudadValida) errores.push("Ciudad inválida (mínimo 3 caracteres)");
        if (!nombreValido) errores.push("Nombre completo inválido (nombre y apellido)");
        if (!passwordValida) errores.push("Contraseña débil (mínimo 8 caracteres)");
        if (!passwordsCoinciden) errores.push("Las contraseñas no coinciden");
        if (!terminosAceptados) errores.push("Debes aceptar los términos y condiciones");

        return errores;
    }

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const errores = validarFormulario();

        if (errores.length > 0) {
            alert("❌ Por favor corrige los siguientes errores:\n\n• " + errores.join("\n• "));
            return;
        }

        modal.style.display = "flex";
    });

    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
        formulario.reset();
        barra.style.width = "0%";
        nivel.style.width = "0%";
        mensajeCorreo.textContent = "";
        mensajeTelefono.textContent = "";
        mensajeCiudad.textContent = "";
        mensajeNombre.textContent = "";
        mensajePassword.textContent = "";
        textoSeguridad.textContent = "";

        ojo.classList.remove("fa-eye-slash");
        ojo.classList.add("fa-eye");
        ojo2.classList.remove("fa-eye-slash");
        ojo2.classList.add("fa-eye");

        password.type = "password";
        confirmPassword.type = "password";

        campos.forEach(campo => {
            campo.classList.remove("error", "success");
        });
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            cerrarModal.click();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "flex") {
            cerrarModal.click();
        }
    });

});