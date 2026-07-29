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

ojo.addEventListener("click", () => {

    if(password.type === "password"){
        password.type = "text";
        ojo.classList.replace("fa-eye","fa-eye-slash");
    }else{
        password.type = "password";
        ojo.classList.replace("fa-eye-slash","fa-eye");
    }

});

ojo2.addEventListener("click", () => {

    if(confirmPassword.type === "password"){
        confirmPassword.type = "text";
        ojo2.classList.replace("fa-eye","fa-eye-slash");
    }else{
        confirmPassword.type = "password";
        ojo2.classList.replace("fa-eye-slash","fa-eye");
    }

});

correo.addEventListener("input", ()=>{

    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(expresion.test(correo.value)){
        mensajeCorreo.textContent="✔ Correo válido";
        mensajeCorreo.style.color="green";
    }else{
        mensajeCorreo.textContent="✖ Correo inválido";
        mensajeCorreo.style.color="red";
    }

});

password.addEventListener("input", ()=>{

    let fuerza=0;

    if(password.value.length>=8) fuerza++;

    if(/[A-Z]/.test(password.value)) fuerza++;

    if(/[0-9]/.test(password.value)) fuerza++;

    if(/[@$!%*?&]/.test(password.value)) fuerza++;

    if(fuerza==1){

        nivel.style.width="25%";
        nivel.style.background="red";
        textoSeguridad.textContent="Contraseña débil";
        textoSeguridad.style.color="red";

    }

    if(fuerza==2){

        nivel.style.width="50%";
        nivel.style.background="orange";
        textoSeguridad.textContent="Contraseña media";
        textoSeguridad.style.color="orange";

    }

    if(fuerza==3){

        nivel.style.width="75%";
        nivel.style.background="#eab308";
        textoSeguridad.textContent="Contraseña buena";
        textoSeguridad.style.color="#eab308";

    }

    if(fuerza==4){

        nivel.style.width="100%";
        nivel.style.background="green";
        textoSeguridad.textContent="Contraseña fuerte";
        textoSeguridad.style.color="green";

    }

    if(password.value==""){

        nivel.style.width="0%";
        textoSeguridad.textContent="";

    }

});

confirmPassword.addEventListener("input", ()=>{

    if(confirmPassword.value===""){

        mensajePassword.textContent="";
        return;

    }

    if(password.value===confirmPassword.value){

        mensajePassword.textContent="✔ Las contraseñas coinciden";
        mensajePassword.style.color="green";

    }else{

        mensajePassword.textContent="✖ Las contraseñas no coinciden";
        mensajePassword.style.color="red";

    }

});

campos.forEach(campo=>{

    campo.addEventListener("input", ()=>{

        let llenos=0;

        campos.forEach(input=>{

            if(input.value.trim()!==""){
                llenos++;
            }

        });

        barra.style.width=(llenos/campos.length)*100+"%";

    });

});

formulario.addEventListener("submit",(e)=>{

    e.preventDefault();

    if(password.value!==confirmPassword.value){

        alert("Las contraseñas no coinciden.");
        return;

    }

    modal.style.display="flex";

});

cerrarModal.addEventListener("click",()=>{

    modal.style.display="none";

    formulario.reset();

    barra.style.width="0%";

    nivel.style.width="0%";

    mensajeCorreo.textContent="";
    mensajePassword.textContent="";
    textoSeguridad.textContent="";

    ojo.classList.remove("fa-eye-slash");
    ojo.classList.add("fa-eye");

    ojo2.classList.remove("fa-eye-slash");
    ojo2.classList.add("fa-eye");

    password.type="password";
    confirmPassword.type="password";

});
