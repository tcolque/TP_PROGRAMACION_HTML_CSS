// OBTENER ELEMENTOS DEL HTML
let formulario = document.getElementById("formularioContacto");

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let password = document.getElementById("password");
let mensaje = document.getElementById("mensaje");
let btnMostrar = document.getElementById("btnMostrar");
let icono = btnMostrar.querySelector("i");

// VALIDACIONES EN VIVO

nombre.addEventListener("input", validarNombre);
email.addEventListener("input", validarEmail);
password.addEventListener("input", validarPassword);
mensaje.addEventListener("input", validarMensaje);



// ENVÍO DEL FORMULARIO

formulario.addEventListener("submit", validarFormulario);

// FUNCIONES

// VALIDAR NOMBRE
function validarNombre() {

    if (nombre.value.length < 3) {

        nombre.style.border = "2px solid red";

    } else {

        nombre.style.border = "2px solid green";

    }

}

// VALIDAR EMAIL
function validarEmail() {

    if (email.value.includes("@")) {

        email.style.border = "2px solid green";

    } else {

        email.style.border = "2px solid red";

    }

}

// VALIDAR CONTRASEÑA
function validarPassword() {

    if (password.value.length < 6) {

        password.style.border = "2px solid red";

    } else {

        password.style.border = "2px solid green";

    }
    
    btnMostrar.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        icono.classList.remove("bi-eye");
        icono.classList.add("bi-eye-slash");

    } else {

        password.type = "password";
        icono.classList.remove("bi-eye-slash");
        icono.classList.add("bi-eye");

    }

});

}

// VALIDAR MENSAJE
function validarMensaje() {

    if (mensaje.value.length < 10) {

        mensaje.style.border = "2px solid red";

    } else {

        mensaje.style.border = "2px solid green";

    }

}

// VALIDAR FORMULARIO
function validarFormulario(e) {

    e.preventDefault();

        alert("¡Gracias por contactarte! Tu consulta fue enviada correctamente.");

// REINICIAR EL FORMULARIO
        formulario.reset();

// RESTABLECER LOS BORDES DE LOS CAMPOS
            nombre.style.border = "";
            email.style.border = "";
            password.style.border = "";
            mensaje.style.border = "";
    }
