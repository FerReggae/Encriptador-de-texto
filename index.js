function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje"); 
    let parrafo = document.getElementById("parrafo");

    /*Las "llaves" de encriptación que utilizaremos son las siguientes:

    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"*/

    let textoCifrado = texto
        .replace(/e/gi, "enter") /*remplazo global "gi"*/
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) { /* "!=0" si es diferente de cero se puede cifrar*/
        document.getElementById("texto").value = textoCifrado;  
        tituloMensaje.textContent = "Texto encriptado con éxito"; /*texto contenido "textContent" */       
        parrafo.textContent = "";
    } else {
        alert("Debes ingresar algún texto");
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deceas encriptar o desencriptar";
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje"); 
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto
        .replace(/enter/gi, "e") /*remplazo global "gi"*/
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if (texto.length != 0) { /* "!=0" si es diferente de cero se puede cifrar*/
            document.getElementById("texto").value = textoCifrado;  
            tituloMensaje.textContent = "Texto desencriptado con éxito"; /*texto contenido "textContent" */       
            parrafo.textContent = "";
        } else {
            alert("Debes ingresar algún texto");
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deceas encriptar o desencriptar";
        }
}