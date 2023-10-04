
const boton0 = document.getElementById("botonverperfil");
const boton1 = document.getElementById("botonpost");
const boton2 = document.getElementById("botoncitas");
const boton3 = document.getElementById("botonlikes");
const boton4 = document.getElementById("botoninicio");

const contenido0 = document.getElementById("miperfil");
const contenido1 = document.getElementById("contenidoprincipal");
const contenido2 = document.getElementById("contenidocitas");
const contenido3 = document.getElementById("contenidolikes");

contenido1.style.display = "contents";
contenido0.style.display = "none";
contenido2.style.display = "none";
contenido3.style.display = "none";

boton0.addEventListener("click", function () {
    contenido0.style.display = "block";
    contenido1.style.display = "block";
    contenido2.style.display = "none";
    contenido3.style.display = "none";



});


boton1.addEventListener("click", function () {

    contenido1.style.display = "block";
    contenido2.style.display = "none";
    contenido3.style.display = "none";


});

boton2.addEventListener("click", function () {

    contenido1.style.display = "none";
    contenido2.style.display = "grid";
    contenido3.style.display = "none";
});

boton3.addEventListener("click", function () {

    contenido1.style.display = "none";
    contenido2.style.display = "none";
    contenido3.style.display = "grid";
});

boton4.addEventListener("click", function () {

    contenido0.style.display = "none";
    contenido1.style.display = "contents";
    contenido2.style.display = "none";
    contenido3.style.display = "none";


});


// Obtener referencias a elementos HTML
const botonAbrir = document.getElementById("botonAbriruno");
const miModal = document.getElementById("sugerenciauno");
const botonAbrirdos = document.getElementById("botonAbrirdos");
const miModaldos = document.getElementById("sugerenciados");
const cerrarModal = document.getElementById("cerrarModal");
const cerrarModaldos = document.getElementById("cerrarModaldos");

// Abrir la pantalla emergente al hacer clic en el botón
botonAbrir.addEventListener("click", function() {
    miModal.style.display = "block";
});

// Cerrar la pantalla emergente al hacer clic en la "X"
cerrarModal.addEventListener("click", function() {
    miModal.style.display = "none";
  
});
botonAbrirdos.addEventListener("click", function() {
    miModaldos.style.display = "block";
});
cerrarModaldos.addEventListener("click", function() {
    miModaldos.style.display = "none";
});

cerrarModaldos
// Cerrar la pantalla emergente si se hace clic fuera de ella
window.addEventListener("click", function(event) {
    if (event.target === miModal) {
        miModal.style.display = "none";
    }

else if (event.target === miModaldos) {
        miModaldos.style.display = "none";
    }
});