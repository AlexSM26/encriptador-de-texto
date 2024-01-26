var textoIngresado = document.querySelector(".ingresar-texto");
var mensajeFinal = document.querySelector('#texto-resultado');
var btnEncriptar = document.getElementById("btn-encriptar");
var btnDesencriptar = document.getElementById('btn-desencriptar');
var btnCopiar = document.getElementById('btn-copiar');

var mensaje;
var txtEncriptado
var txtDesencriptado

try {
    //Encripta las letras
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
    
    //Desencripta las letras
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

    if(mensaje != 0){
       
    }










    btnCopiar.addEventListener('click', () =>{

        textoIngresado.select();
        document.execCommand('copy')
        
    })







} catch (e) {
    alert(`A ocurrido un error ${e}`)
}


  
