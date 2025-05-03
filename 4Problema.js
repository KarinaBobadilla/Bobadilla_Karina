var VIP = True;
var Precio = 100;
var Descuento;
var TotalVIP;

if(VIP == true){
    Descuento = (Precio * 20)/100
    TotalVIP = (Precio-Descuento)
    console.log("Deve pagar:", TotalVIP)
} else{
    console.log("Deve pagar:",Precio )
}