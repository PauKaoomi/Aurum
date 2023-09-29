let listaClick = document.querySelectorAll(".click")
let listaVentAbrir=document.querySelectorAll(".abrirV")
let listaCerrar=document.querySelectorAll(".cerrarV")


console.log(listaVentAbrir)

//function eventC(id){


for (i = 0; i < listaClick.length; i++) {

    listaClick[i].addEventListener("click", function (e) {


        const ids = e.target.getAttribute("id-modal");
        console.log(ids)

        for (i = 0; i < listaVentAbrir.length; i++) {

            let idd = listaVentAbrir[i].getAttribute("id")

            console.log(ids)
            console.log(idd)

            
            if (ids == idd ) {


                document.getElementById(idd).style.display = "block"



            }else {

                document.getElementById(idd).style.display = "none"
                document.getElementById("mainCerrar").style.display="none"
                document.getElementById("asideC").style.display="none"
                document.getElementById("asideDosC").style.display="none"
                document.getElementById("navC").style.display="none"


            }if (ids=="x"){
            
                console.log("Se ejecuto")
                document.getElementById("mainCerrar").style.display="block"
                document.getElementById("asideC").style.display="block"
                document.getElementById("asideDosC").style.display="block"
                document.getElementById("navC").style.display="block"


            }

        }
    })

}



/*document.querySelectorAll(".click").forEach(function (idEtiqueta) {
 
    idEtiqueta.addEventListener("click", function (e) {
 
        const id = e.target.getAttribute("id");
 
    });
 
});*/


/*    function abrir(indicador) {

        console.log(indicador)

        if (indicador == "v-inicio") {

            indicador = "emergente"

            document.getElementById(indicador).style.display = "block";

            document.getElementById("emergenteRe").style.display = "none";

        } else if (indicador == "v-registro") {

            indicador = "emergenteRe"

            document.getElementById(indicador).style.display = "block";

            document.getElementById("emergente").style.display = "none";

        }

    }



    function cerrar(indicador) {

        if (indicador == "cerrar-ini") {
            console.log(indicador)

            indicador = "emergente"

            document.getElementById(indicador).style.display = "none";

        } else if (indicador == "registroBtn") {


            indicador = "emergenteRe"

            document.getElementById(indicador).style.display = "none";

        }

    }*/

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
    if (contraseña() == true && contraseña() == true) {

        document.querySelector(".inicio-registro").style.display = "none";
        document.querySelector(".buscar").style.display = "block";
        document.querySelector(".globo-perfil").style.display = "block";
        document.querySelector(".pubPost").style.display = "block"
        document.getElementById("mainCerrar").style.display="block"
        document.getElementById("asideC").style.display="block"
        document.getElementById("asideDosC").style.display="block"
        document.getElementById("navC").style.display="block"
        document.querySelector("#emergente").style.display = "none";
    

    } else {
        alert("La contraseña o el correo no coincide")
    }
}
function eventoR() {
    btnIni.addEventListener("click", acceso)
}