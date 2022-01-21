// Logica para encriptar
function encriptar(miarray){
    var miarraycreado ='';    
    function cambiar(caracter){
        // vocales que vamos a usar
        const vocales ='aeiou';
        const mapa = new Map ([["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]);
        return((vocales.indexOf(caracter) >= 0) ? mapa.get(caracter) : caracter);
    }

// recorremos miarray para cambiar
    for (var i = 0; i < miarray.length; i++){
        miarraycreado += cambiar(miarray.substr(i,1));
    }
    return (miarraycreado)
}
// desencriptar
function desencriptar(miarray){
    const mapa = new Map ([["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]);
    var vocales ='aeiou';
    for (var i = 0 ; i < vocales.length; i++){
        var caracter = vocales.substr(i,1);
        var regEx = new RegExp(mapa.get(caracter), 'g');
        var miarray = miarray.replace(regEx, caracter)
    }
    return(miarray);
}

document.getElementById("input-texto").addEventListener("keyup", expresion);
function expresion() {
  var a = document.getElementById("input-texto");
  const expr = new RegExp("[^A-Za-z ]", 'g')
  a.value = a.value.toLowerCase().replace(expr, "");
}

var botonencriptar = document.querySelector("#btnencriptar");
botonencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var a = document.getElementById("input-texto");
    var b = document.getElementById("msg");
    b.value = encriptar(a.value);
});

var botondesencriptar = document.querySelector("#btndesencriptar");
botondesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var a = document.getElementById("input-texto");
    var b = document.getElementById("msg");
    b.value = desencriptar(a.value);
});


var buttoncopy = document.querySelector("#btncopiar");
buttoncopy.addEventListener("click",function(event){
    event.preventDefault();
    var b = document.getElementById("msg");
    console.log(b.value);
    y.select();
    navigator.clipboard.writeText(b.value)
});