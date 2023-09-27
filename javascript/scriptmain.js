

function publicar(){
    let textoPub = window.document.querySelector("#cuadropub").value
    let CajaComentario = "<article class='comentariosPub'><article class='espacioImg'><img class='ImgComentarios' src='Img/concierto.png' alt='Imagen Redonda' class='imagen-redonda'></article><article class='espacioCajaComentario'><p>"+textoPub+"</p></article></article>"
    const comentario = document.createElement('p')
    document.getElementById("comentariosCaja").appendChild(CajaComentario)
}

let btnPublicar = window.document.querySelector("#buttonpubuno") 
btnPublicar.addEventListener("click", publicar)
