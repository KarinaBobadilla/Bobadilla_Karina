function mayorA10(numeros){
    let mayores = [];
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > 10){
             mayores.push(numeros[i]);
        }
    }
    return mayores;
}

let resultado = mayorA10([3,15,8,20,7]);
console.log(resultado);