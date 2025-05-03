function suma(inicio, fin){
    let sum = 0;
    for (let i = inicio; i <= fin; i++){
        sum += i;
    }
    return sum;
}

console.log(suma(1, 2))