

function publicar(){
    let textoPub = window.document.querySelector("#cuadropub").value

    const comentario = document.createElement('article')
    comentario.className += "comentariosPub"
    comentario.innerHTML = "<article class='espacioImg'><img class='ImgComentarios' src='Img/concierto.png' alt='Imagen Redonda' class='imagen-redonda'></article><article class='espacioCajaComentario'><p class='usuario'><b>@usuario</b></p><p>"+textoPub+"</p></article>"

    const padre = document.querySelector('#comentariosCaja')

    padre.appendChild(comentario)
    
}

let btnPublicar = window.document.querySelector("#buttonpubuno") 
btnPublicar.addEventListener("click", publicar)
