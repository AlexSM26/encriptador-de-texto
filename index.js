var ingresarTexto = document.querySelector('.ingresar-texto');
var mensajeFinal = document.querySelector('#texto-resultado');
var btnEncriptar = document.getElementById("btn-encriptar");
var btnDesencriptar = document.getElementById('btn-desencriptar');

let mensaje = '';
let encriptado = '';
let desencriptado = '';


//Encriptar las letras
btnEncriptar.addEventListener('click', () => {
    
    const mensaje = ingresarTexto.value.toLowerCase();
    
    function encriptarTexto(encriptado){
        encriptado = '';
        for(var i = 0; i < mensaje.length; i++){
            
            if(mensaje[i] == 'a'){
                encriptado += 'ai';
        
            }else if(mensaje[i] == 'e'){
                encriptado += 'enter';
        
            }else if(mensaje[i] == 'i'){
                encriptado += 'imes';
        
            }else if(mensaje[i] == 'o'){
                encriptado += 'ober';
        
            }else if(mensaje[i] == 'u'){
                encriptado += 'ufat';
            
            }else{
                encriptado += mensaje[i];
            }
        }
        return encriptado
        
    }
    const textoEncriptado = encriptarTexto(mensaje);
    mensajeFinal.innerHTML = textoEncriptado;
    
})


//Desencriptar las letras 
btnDesencriptar.addEventListener('click', () => {
    
    const mensaje = ingresarTexto.value.toLowerCase();
    
    function desencriptarTexto(desencriptado){
        desencriptado = '';
        
        for(var i = 0; i < mensaje.length; i++){
            
            if(mensaje[i] == 'ai'){
                desencriptado += 'a';
        
            }else if(mensaje[i] == 'enter'){
                desencriptado += 'e';
        
            }else if(mensaje[i] == 'imes'){
                desencriptado += 'i';
        
            }else if(mensaje[i] == 'ober'){
                desencriptado += 'o';
        
            }else if(mensaje[i] == 'u'){
                desencriptado += 'ufat';
            
            }else{
                desencriptado += mensaje[i]
            }
        }
        return desencriptado
        
    }
    const textoDesencriptado = desencriptarTexto(mensaje);
    mensajeFinal.innerHTML = textoDesencriptado;
})
