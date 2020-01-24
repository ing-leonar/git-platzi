var d=document.getElementById("dibujito");
var lienzo= d.getContext("2d");
var lineas=30;
var l=0;
var yf, xi;
var colorcito="#FAA";

while (l<lineas)
{
yf= 10*l;
xi= 10*(l+1);
dibujarLinea("grey", 0, yf, xi, 300);
console.log("Linea"+ l);
l=l+2;

}
dibujarLinea(colorcito, 299,1,1,1);
dibujarLinea(colorcito, 299,299,299,1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(yinicial,xinicial);
    lienzo.lineTo(yfinal,xfinal);
    lienzo.stroke();
    lienzo.closePath();
    
}
