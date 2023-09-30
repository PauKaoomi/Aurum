const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");

const contenido1 = document.getElementById("contenido1");
const contenido2 = document.getElementById("contenido2");
const contenido3 = document.getElementById("contenido3");

contenido2.style.display = "none";
contenido3.style.display = "none";


boton1.addEventListener("click", function () {
    contenido1.style.display = "block";
    contenido2.style.display = "none";
    contenido3.style.display = "none";
});

boton2.addEventListener("click", function () {
    contenido1.style.display = "none";
    contenido2.style.display = "block";
    contenido3.style.display = "none";
});

boton3.addEventListener("click", function () {
    contenido1.style.display = "none";
    contenido2.style.display = "none";
    contenido3.style.display = "block";
});
onCustomEditor:jsonGridViewer.json
