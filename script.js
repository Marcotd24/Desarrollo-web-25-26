function mostrarAlerta() {
    alert("¡Gracias por visitar nuestra página web!");
}

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    let valido = true;

    // Obtener campos
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    // Limpiar errores
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorMensaje").textContent = "";

    // Validaciones
    if (nombre === "") {
        document.getElementById("errorNombre").textContent = "El nombre es obligatorio";
        valido = false;
    }

    if (correo === "") {
        document.getElementById("errorCorreo").textContent = "El correo es obligatorio";
        valido = false;
    }

    if (mensaje === "") {
        document.getElementById("errorMensaje").textContent = "El mensaje es obligatorio";
        valido = false;
    }

    if (valido) {
        alert("Formulario enviado correctamente");
        document.getElementById("formulario").reset();
    }
});
