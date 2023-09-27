document.querySelectorAll(".click").forEach(function (idEtiqueta) {

    idEtiqueta.addEventListener("click", function (e) {

        const id = e.target.getAttribute("id");

        abrir()
        cerrar()

    });

});


function abrir(indicador) {

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

}

//Iniciar sesion
let listaContraseña=["santiago", "sebastian", "paula", "alvaro", "rafael"]
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

function acceso(){
    if(contraseña()==true && contraseña()==true){

        document.querySelector(".inicio-registro").style.display="none";
        document.querySelector(".buscar").style.display="block";
        document.querySelector(".globo-perfil").style.display="block";
        document.querySelector("#emergente").style.display="none";

    }else{
        alert("La contraseña o el correo no coincide")
    }
}
function eventoR() {
    btnIni.addEventListener("click", acceso)
}



    /*if (input==co){

        document.querySelector(".inicio-registro").style.display="none";
        document.querySelector(".buscar").style.display="block";
        document.querySelector(".globo-perfil").style.display="block";
        document.querySelector("#emergente").style.display="none";
        contador=0

    }else if((input !=co && co == ultimo) && (contador==1)){
        alert("El correo no coincide")

    }*/
