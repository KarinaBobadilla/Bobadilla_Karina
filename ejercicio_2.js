//solucion 1
function formatearTexto(texto){
   return texto.trim().toUpperCase();
}



//llamado de la funcion
let resultado = formatearTexto("   hola mundo   ")
console.log(resultado)


//La solucion correta es la Solucion 1 
// La solucion tiene  ls siguientes errores: en la parte de toUpperCase() y trim no se estan guardando esos valores y por lo tanto el string no se transforma y 
// se podria correguir   return texto.trim().toUpperCase();
//solucion 2

//function formatearTexto(texto){
    //texto.toUpperCase();
    //texto.trim();
    //return texto;
//}