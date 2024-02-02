//Mostrar en pantalla
var textoIngresado = document.querySelector(".ingresar-texto");
var mensajeFinal = document.querySelector('.texto-resultado');

//Botones
var btnEncriptar = document.getElementById("btn-encriptar");
var btnDesencriptar = document.getElementById('btn-desencriptar');
var btnCopiar = document.getElementById('btn-copiar');

//Otros
var imgMuneco = document.querySelector('.muneco');
var infoSubtitulo = document.querySelector('.informacion-subtitulo');
var infoParrafo = document.querySelector('.informacion-parrafo');

//Variables
var mensaje;
var txtEncriptado;
var txtDesencriptado;

try {

    //Validacion de letras y numeros
    function validarLetras(l) {
        key = l.keyCode || l.which;
        tecla = String.fromCharCode(key).toLowerCase();
        letras = " abcdefghijklmnñopqrstuvwxyz123456789";
        especiales = [8, 37, 39, 46];
        
        //Buscamos si esta la tecla precionada por el usuario
        tecla_especial = false
        for(var i in especiales) {
            if(key == especiales[i]) {
                tecla_especial = true;
                break;
            }
        }
        if(letras.indexOf(tecla) == -1 && !tecla_especial){
            return false;
        }
            
    }

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

        if(mensaje.length != 0){
            desaparecerElementos()           
        }else{
            aparecerElementos()
        }

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

        if(mensaje.length != 0){
            desaparecerElementos()           
        }else{
            aparecerElementos()
        }
    })

    function desaparecerElementos(){
        imgMuneco.style.display = 'none';
        infoSubtitulo.style.display = 'none';
        infoParrafo.style.display = 'none';
        mensajeFinal.style.display = 'unset';
        btnCopiar.style.display = 'unset';
    }

    function aparecerElementos(){
        imgMuneco.style.display = 'unset';
        infoSubtitulo.style.display = 'unset';
        infoParrafo.style.display = 'unset';
        mensajeFinal.style.display = 'none';
        btnCopiar.style.display = 'none';
        infoParrafo.innerHTML = 'Ingresa el texto que desees escriptar o <br> desencriptar'
    }

    btnCopiar.addEventListener('click', () =>{

        mensajeFinal.select();
        document.execCommand('copy')
        infoParrafo.style.display = 'unset'
        infoParrafo.innerHTML= 'Mensaje copiado con exito'
        
    })

} catch (e) {
    alert(`¡Upss a ocurrido un error!  ${e}`)
}
