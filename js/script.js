// ===============================
// ELEMENTOS
// ===============================

const botones = document.querySelectorAll(".color-btn");

const foto = document.getElementById("fotoColor");

const video = document.getElementById("videoColor");

const source = document.getElementById("videoSource");



// ===============================
// CAMBIAR COLOR
// ===============================

botones.forEach(boton => {

    boton.addEventListener("click", function () {

        // Quitar selección anterior
        botones.forEach(b => b.classList.remove("activo"));

        // Activar el botón seleccionado
        this.classList.add("activo");

        // Obtener la nueva imagen y video
        const nuevaImagen = this.dataset.imagen;
        const nuevoVideo = this.dataset.video;

        // Cambiar imagen
        foto.src = nuevaImagen;

        // Cambiar video
       source.src = nuevoVideo;

        video.load();

        video.play();

    });

});