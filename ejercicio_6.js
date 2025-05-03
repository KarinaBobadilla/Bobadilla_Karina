let valores = [true, false, 2, "character", "charmander", 3, "char"];

// a)
function texto(array) {
    let textos = array.filter(item => typeof item === "string");
    let mayor = "";

    for (let i = 0; i < textos.length; i++) {
        if (textos[i].length > mayor.length) {
            mayor = textos[i];
        }
    }

    return mayor;
}

console.log("el texto mas lagro es:", texto(valores)); 

// b) 
function operacion(array) {
    let numeros = array.filter(item => typeof item === "number");

    if (numeros.length >= 2) {
        let a = numeros[0];
        let b = numeros[1];

        return {
            suma: a + b,
            resta: a - b,
            multiplicacion: a * b,
            division: a / b
        };
    } else {
        return "No hay suficientes números.";
    }
}

console.log("Operaciones con los números:", operacion(valores));
