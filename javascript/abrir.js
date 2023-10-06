let listaClick = document.querySelectorAll(".click")
let listaVentAbrir = document.querySelectorAll(".abrirV")
let listaVentA = document.querySelectorAll(".exp")
let inicio = document.querySelector(".ventI")
let registro = document.querySelector(".ventR")
let main= document.querySelector(".mainMover")
let asideDos= document.querySelector(".asidepadre")
let asideUno=document.querySelector(".asideuno")





for (i = 0; i < listaClick.length; i++) {

    listaClick[i].addEventListener("click", function (e) {


        const ids = e.target.getAttribute("id-modal");

        for (i = 0; i < listaVentAbrir.length; i++) {

            let idd = listaVentAbrir[i].getAttribute("id")



            if (ids == idd) {


                document.getElementById(idd).style.display = "block"



            } else {

                document.getElementById(idd).style.display = "none"

            }

        }
    })

}

for (i = 0; i < listaVentA.length; i++) {

    let list=listaVentA[i]
    listaVentA[i].addEventListener("click", function (e) {

        let vent = e.target.getAttribute("id-modal")

        if (vent == "abrirV") {

            list.style.display="none"
        }

    })

}



//Iniciar sesion
let listaContraseña = ["santiago", "sebastian", "paula", "alvaro", "rafael"]
let listaCorreo = ["santiago.aurum@gmail.com", "sebastian.aurum@gmail.com", "paula.aurum@gmail.com", "alvaro.aurum@gmail.com", "rafael.aurum@gmail.com"]
let btnIni = window.document.querySelector("#botonIniciar")
let ultimo = listaCorreo[listaCorreo.length - 1]

function correoI() {

    let input = document.querySelector("#inp-correo").value;
    let correo = false

    if (listaCorreo.includes(input)) {
        correo = true

    }
    else if (!listaCorreo.includes(input)) {
        correo = false

    }

    return correo
}

function contraseña() {

    let input = document.querySelector("#cont").value;
    let contra = false

    if (listaContraseña.includes(input)) {
        contra = true
    }
    else if (!listaContraseña.includes(input)) {
        contra = false
    }

    return contra
}

function acceso() {
    if (contraseña() == true && correoI() == true) {

        main.classList.remove("mainMover")
        asideUno.classList.remove("moverAsideUno")
        asideDos.classList.remove("moverAsideDos")
        inicio.classList.remove("ventI")
        registro.classList.remove("ventR")

        let listaAcceso = document.querySelectorAll(".acceso")
        for (i = 1; i < listaAcceso.length; i++) {

            let classAcceso = listaAcceso[i].getAttribute("id-acceso")
            let elemento = listaAcceso[i]



            if (classAcceso == "accesoId") {


                elemento.style.display = "block";
                document.querySelector(".globo-perfil").style.display = "block"

            } else {
                elemento.style.display = "none"
            }

        }

    } else {
        alert("La contraseña o el correo no coincide")
    }
}
function eventoR() {
    btnIni.addEventListener("click", acceso)
}

//post



function eventP() {

    let btnn = document.querySelectorAll(".btnCam")
    let textE = document.getElementById('textoEntero')


    for (i = 0; i < btnn.length; i++) {

        btnn[i].addEventListener("click", function (e) {

            let target = e.target.getAttribute("id")


            if (target == "bold") {
                e.target.classList.toggle("cambioColor")
                textE.classList.toggle("bold")

            } else if (target == "italica") {
                e.target.classList.toggle("cambioColor")
                textE.classList.toggle("italica")

            } else if (target == "links") {
                e.target.classList.toggle("cambioColor")
                textE.classList.toggle("bold")

            } else if (target == "subrayado") {
                e.target.classList.toggle("cambioColor")
                textE.classList.toggle("subrayado")

            } else if (target == "titulo") {
                e.target.classList.toggle("cambioColor")
                textE.classList.toggle("bold")

            } else if (target == "listaP") {
                e.target.classList.toggle("cambioColor")
                textE.classList.toggle("bold")

            } else if (target == "listaN") {
                e.target.classList.toggle("cambioColor")
                textE.classList.toggle("bold")

            }

        })
    }
}
eventP()



function eventBtnPost() {


    let btnPosts = document.querySelectorAll(".clikP")
    let btnCambiar = document.querySelectorAll(".cambiarP")
    let ventPost = document.getElementById("abrirPostP")
    let footerPost = document.getElementById("footerPostDos")
    let mainPost = document.getElementById("mainPoDos")

    console.log(btnPosts)


    for (i = 0; i < btnPosts.length; i++) {

        btnPosts[i].addEventListener("click", function (e) {


            let is = e.target.getAttribute("id-post")
            console.log(is)


            for (i = 0; i < btnCambiar.length; i++) {

                let on = btnCambiar[i].getAttribute("id")


                if (is == on) {

                    if (is == "linkP") {

                        document.getElementById(on).style.display = "grid"
                        ventPost.classList.add("lineaDeco2")
                        footerPost.classList.add("footerPostdo")
                        mainPost.classList.add("mainPostDos")

                    } else {


                        document.getElementById(on).style.display = "grid"
                        ventPost.classList.remove("lineaDeco2")
                        footerPost.classList.remove("footerPostdo")
                        mainPost.classList.remove("mainPostDos")

                    }


                } else {
                    document.getElementById(on).style.display = "none"

                }


            }
        })


    }

}

eventBtnPost()

