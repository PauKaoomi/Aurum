

function publicar(numero){
    let box = window.document.querySelector("#cuadropub"+numero+"")
    textoPub = box.value

    const comentario = document.createElement('article')
    comentario.className += "comentariosPub"
    comentario.innerHTML = "<article class='espacioImg'><img class='ImgComentarios' src='Img/concierto.png' alt='Imagen Redonda' class='imagen-redonda'></article><article class='espacioCajaComentario'><p class='usuario'><b>@usuario</b></p><p>"+textoPub+"</p></article>"

    const padre = document.querySelector('#comentariosCaja'+numero+'')
    
    padre.appendChild(comentario)
    box.value=''

    let NumComm = parseInt(window.document.querySelector("#valorComm"+numero+"").innerHTML)
    let suma = NumComm+=1
    window.document.querySelector("#valorComm"+numero+"").innerHTML= suma
}

function reaccion(num){
    let numLike = parseInt(window.document.querySelector("#valorLike"+num+"").innerHTML)
    if(numLike==0){
        numLike +=1
        window.document.querySelector("#valorLike"+num+"").innerHTML= numLike
    }
       
}
