var texto= document.getElementById("texto_lineas");
var boton= document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var d=document.getElementById("dibujito");
var lienzo= d.getContext("2d");

var ancho= d.width;
var alto= d.height;
var w=ancho/2;
var h=alto/2;
var l=0;


function dibujoPorClick()
{
    var lineas= parseInt(texto.value);
    
    
    for (l=0; l<lineas; l++)
{   
var colorcito="#black"; 
var espaciox= w/lineas;
var espacioy= h/lineas;
var increm_0x= espaciox+l;
var increm_1x= espaciox+(l+1);
var increm_0y= espacioy+l;
var increm_1y= espacioy+(l+1);

yi= h-increm_0y;
xf= increm_1x;
dibujarLinea(colorcito, 0, yi, xf, 0);
xi= w+increm_0x;
yf= increm_1y;
dibujarLinea(colorcito, xi, 0, ancho, yf);
yi= h+increm_0y;
xf= ancho-increm_1x;
dibujarLinea(colorcito, ancho, yi, xf, alto);
xi= w-increm_0x;
yf= alto-increm_1y;
dibujarLinea(colorcito, xi, alto, 0, yf);

console.log("Linea" + l);

}
}