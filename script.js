const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImageBtn");
const deleteImageBtn = document.getElementById("deleteImageBtn");
const gallery = document.getElementById("gallery");

let selectedImage = null;

// Agregar imagen
addImageBtn.addEventListener("click", () => {
    const url = imageUrlInput.value.trim();

    if (url === "") {
        alert("Por favor ingresa una URL válida");
        return;
    }

    const img = document.createElement("img");
    img.src = url;

    img.addEventListener("click", () => {
        selectImage(img);
    });

    gallery.appendChild(img);
    imageUrlInput.value = "";
});

// Seleccionar imagen
function selectImage(img) {
    const images = document.querySelectorAll(".gallery img");
    images.forEach(image => image.classList.remove("selected"));

    img.classList.add("selected");
    selectedImage = img;
}

// Eliminar imagen seleccionada
deleteImageBtn.addEventListener("click", () => {
    if (selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    } else {
        alert("No hay ninguna imagen seleccionada");
    }
});

// Atajo de teclado (Delete)
document.addEventListener("keydown", (event) => {
    if (event.key === "Delete") {
        if (selectedImage) {
            selectedImage.remove();
            selectedImage = null;
        }
    }
});
