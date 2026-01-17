document.addEventListener("DOMContentLoaded", function () {
const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorPassword = document.getElementById("errorPassword");
const errorConfirmar = document.getElementById("errorConfirmar");
const errorEdad = document.getElementById("errorEdad");

function validarNombre() {
    if (nombre.value.length < 3) {
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres";
        nombre.style.borderColor = "red";
        return false;
    }
    errorNombre.textContent = "";
    nombre.style.borderColor = "green";
    return true;
}

function validarCorreo() {
    const exp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!exp.test(correo.value)) {
        errorCorreo.textContent = "Correo no válido";
        correo.style.borderColor = "red";
        return false;
    }
    errorCorreo.textContent = "";
    correo.style.borderColor = "green";
    return true;
}

function validarPassword() {
    const exp = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (!exp.test(password.value)) {
        errorPassword.textContent = "Mínimo 8 caracteres, un número y un especial";
        password.style.borderColor = "red";
        return false;
    }
    errorPassword.textContent = "";
    password.style.borderColor = "green";
    return true;
}

function validarConfirmacion() {
    if (confirmar.value !== password.value || confirmar.value === "") {
        errorConfirmar.textContent = "Las contraseñas no coinciden";
        confirmar.style.borderColor = "red";
        return false;
    }
    errorConfirmar.textContent = "";
    confirmar.style.borderColor = "green";
    return true;
}

function validarEdad() {
    if (edad.value < 18) {
        errorEdad.textContent = "Debes ser mayor de edad";
        edad.style.borderColor = "red";
        return false;
    }
    errorEdad.textContent = "";
    edad.style.borderColor = "green";
    return true;
}

function validarFormulario() {
    if (
        validarNombre() &&
        validarCorreo() &&
        validarPassword() &&
        validarConfirmacion() &&
        validarEdad()
    ) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

nombre.addEventListener("input", validarFormulario);
correo.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmar.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulario validado correctamente 🎉");
});

});