document.querySelectorAll(".click").forEach(function (idEtiqueta) {

    idEtiqueta.addEventListener("click", function (e) {

        const id = e.target.getAttribute("id");
        
        abrir()
        cerrar()

    });

});


function abrir(indicador) {

    if (indicador == "v-inicio") {

        indicador="emergente"

        document.getElementById(indicador).style.display = "block";
        
        document.getElementById("emergenteRe").style.display = "none";

    } else if (indicador == "v-registro") {

        indicador="emergenteRe"

        document.getElementById(indicador).style.display = "block";
        
        document.getElementById("emergente").style.display = "none";

    }

}


function cerrar(indicador) {

    if (indicador == "cerrar-ini") {
        console.log(indicador)

        indicador="emergente"

        document.getElementById(indicador).style.display = "none";

    } else if (indicador == "registroBtn") {


        indicador="emergenteRe"

        document.getElementById(indicador).style.display = "none";

    }

}

//Iniciar sesion
let btnIni=window.document.querySelector("#botonIniciar")
function registrado(){

    document.querySelector(".inicio-registro").style.display="none";
    document.querySelector(".buscar").style.display="block";
    document.querySelector(".globo-perfil").style.display="block";
    document.querySelector("#emergente").style.display="none";



}

function eventoR(){
    btnIni.addEventListener("click", registrado)
}