let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo = 10
console.log(numeroSecreto)

function asignarTextoEelemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoEelemento('p',`Acertaste en ${intentos} ${(intentos === 1) ? "intento": "intentos"}`);
        document.querySelector('#reiniciar').removeAttribute('disabled')
    } else {
        //EL USUARIO NO ACERTÓ//
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoEelemento('p', 'El número secreto es menor');
        } else {
            asignarTextoEelemento ('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja()
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
}


function generarNumeroSecreto(params) {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoEelemento ('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); 
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }  
}

function condicionesIniciales(){
    asignarTextoEelemento('h1','Juego del número secreto');
    asignarTextoEelemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //LIMPIAR CAJA
    limpiarCaja();
    //INDICAR MENSAJE DE INTERVALO DE NÚMEROS
    //GENERAR NÚMER ALEATORIO
    //REINICIAR EL NÚMERO DE INTENTOS 
    condicionesIniciales();
    //DESHABILITAR EL BOTÓN DE NUEVO jUEGO
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}
condicionesIniciales();
