var textoIngresado = document.querySelector(".ingresar-texto");
var mensajeFinal = document.querySelector('#texto-resultado');
var btnEncriptar = document.getElementById("btn-encriptar");
var btnDesencriptar = document.getElementById('btn-desencriptar');

var mensaje;
var txtEncriptado
var txtDesencriptado

try {
    //Encriptar las letras
    btnEncriptar.addEventListener('click', () => {
        mensaje = textoIngresado.value.toLowerCase();
    
        txtEncriptado = mensaje
        .replace(/e/gi, "enter")
        .replace(/i/gi, 'imes')
        .replace(/a/gi, "ai")
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');
     
        mensajeFinal.innerHTML = txtEncriptado;
    
    })
    
    //Desencriptar las letras
    btnDesencriptar.addEventListener('click', () => {
    
        mensaje = textoIngresado.value.toLowerCase();
        txtDesencriptado = mensaje
        .replace(/enter/gi,"e")
        .replace(/imes/gi,'i')
        .replace(/ai/gi,"a")
        .replace(/ober/gi,'o')
        .replace(/ufat/gi,'u');
         
        mensajeFinal.innerHTML = txtDesencriptado;
    })

} catch (e) {
    alert(`A ocurrido un error ${e}`)
}


  
