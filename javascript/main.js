const sidebar = document.querySelector ("#sidebar");
const abrir = document.querySelector ("abrir");
const cerrar = document.querySelector ("cerrar");

abrir.addEventListener("click", () => {
    sidebar.classList.add("visible");
})

cerrar.addEventListener ("click", () =>{
    sidebar.classList.remove("visible");
})

