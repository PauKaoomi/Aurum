
const boton0 = document.getElementById("boton0");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("iniciosebas");

const contenido0 = document.getElementById("contenidoprincipal");
const contenido1 = document.getElementById("contenido1");
const contenido2 = document.getElementById("contenido2");
const contenido3 = document.getElementById("contenido3");
const contenido4 = document.getElementById("perfilsebas");

contenido4.style.display ="none"
contenido2.style.display = "none";
contenido3.style.display = "none";


boton0.addEventListener("click", function () {
    contenido4.style.display="block"
    contenido0.style.display = "none";

});

boton4.addEventListener("click", function () {
    contenido4.style.display="none"
    contenido0.style.display = "block";

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