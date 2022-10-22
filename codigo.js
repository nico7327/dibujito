var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var botton = document.getElementById("boton");
var texto = document.getElementById("escribir");
var ancho = d.width;
var borrar = document.getElementById("borrar");
function xL(color,xinicial,yinicial,xfinal,yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


 botton.addEventListener("click",dibujoPorClick);
 function dibujoPorClick(){
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi , xf;
    var espacio = ancho/lineas
    for(l=0 ;l< lineas;l++ ){
    yi = espacio * l;
    xf = espacio * (l+1);
    xL("red",0,yi,xf,500);
 }
 }
 
 borrar.addEventListener("click",borrarPorClick);
 function borrarPorClick(){
    lienzo.clearRect(0, 0, d.width, d.height);
    texto.value = "";
  }
