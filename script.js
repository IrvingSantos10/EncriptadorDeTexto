function encriptar() {
    let mensajeaEncriptar = document.getElementById("mensajeaEncriptar").value;
    let mensajeEstatus = document.getElementById("tituloMensaje");
    let mensajeEncriptado = document.getElementById("parrafoEncriptado");
    let muñeco = document.getElementById("muñeco");

    if (mensajeaEncriptar.length != 0) {
        
        let mensajeCifrado = btoa(mensajeaEncriptar);
        mensajeEstatus.textContent = "Encriptacion Exitosa";
        mensajeEncriptado.textContent = `El token es: ${mensajeCifrado}`;
        muñeco.src = "./img/cifrar.png";
        Swal.fire(
            '¡Encriptado con exito!',
            `El token es: ${mensajeCifrado}`,
            'success'
        );
        document.getElementById("mensajeaEncriptar").value = "";

    } else {

        Swal.fire(
            'Sin texto para Encriptar',
            'Ingresa un texto para codificarlo en base64',
            'error'
        );
    }
}

function desencriptar() {
    let mensajeaEncriptar = document.getElementById("mensajeaEncriptar").value;
    let mensajeEstatus = document.getElementById("tituloMensaje");
    let mensajeEncriptado = document.getElementById("parrafoEncriptado");
    let muñeco = document.getElementById("muñeco");

    if(mensajeaEncriptar != 0){

        let mensajeDesifrado = atob(mensajeaEncriptar);
        mensajeEstatus.textContent = "Desencriptacion Exitosa";
        mensajeEncriptado.textContent = `El texto es: ${mensajeDesifrado}`;
        muñeco.src = "./img/descifrar.png";
        Swal.fire(
            '¡Desencriptado con exito!',
            `El texto es: ${mensajeDesifrado}`,
            'success'
        );
        document.getElementById("mensajeaEncriptar").value = "";

    }else{

        Swal.fire(
            'Sin Token para Desencriptar',
            'Ingresa Un Token en base64',
            'error'
        );
    }
}


