'use strict';
//crear contenedores
/*
1. var = global
2. let = local - variables
3. const = constantes
*/

const btnValidar= document.getElementById('validar');
//console.log(btnvalidar);
//Al addEventListener debo pasar dos párametros
btnValidar.addEventListener('click', function(e) {
    e.preventDefault();
    let form = document.getElementById('dataform');
    console.log(form[1].value);
    console.log(form[2].value);
});