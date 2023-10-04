
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






