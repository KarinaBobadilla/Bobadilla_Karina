function palabras(array, palabra){
    return array.includes(palabra);
}

let palabrass = ["hola", "hello", "holis"];
console.log(palabras(palabrass, "hello"));
console.log(palabras(palabrass, "epa"));
