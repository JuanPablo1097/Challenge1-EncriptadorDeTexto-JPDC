//guía de lo que significarán las vocales.
//a - ai
//e - enter
//i - imes
//o - ober
//u - ufat

function encriptar(){

var texto = document.getElementById("inputTexto").value.toLowerCase();

//i = para que tome en cuenta las minusculas y mayusculas
// m = Para que tome en cuenta varias lineas
// g = para que tome en cuenta toda la oración o línea

var textoCifrado = texto.replace(/e/igm , "enter");
var textoCifrado = textoCifrado.replace(/o/igm , "ober");
var textoCifrado = textoCifrado.replace(/i/igm , "imes");
var textoCifrado = textoCifrado.replace(/a/igm , "ai");
var textoCifrado = textoCifrado.replace(/u/igm , "ufat");

document.getElementById("imgDer").style.display = "none";
document.getElementById("texto").style.display = "none";
document.getElementById("texto2").innerHTML = textoCifrado;
document.getElementById("copiar").style.display = "show";
document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){

var texto = document.getElementById("inputTexto").value.toLowerCase();

var textoCifrado = texto.replace(/enter/igm , "e");
var textoCifrado = textoCifrado.replace(/ober/igm , "o");
var textoCifrado = textoCifrado.replace(/imes/igm , "i");
var textoCifrado = textoCifrado.replace(/ai/igm , "a");
var textoCifrado = textoCifrado.replace(/ufat/igm , "u");

document.getElementById("imgDer").style.display = "none";
document.getElementById("texto").style.display = "none";
document.getElementById("texto2").innerHTML = textoCifrado;
document.getElementById("copiar").style.display = "show";
document.getElementById("copiar").style.display = "inherit";

}

function copiar(){
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand("copy");
  alert("Se ha copiado el texto.");
}

