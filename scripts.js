const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText)
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click' , function(){
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click',function(){
    calcular():
    actualizarDisplay():
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

// function agregarNumero(num){
//     oper
// }