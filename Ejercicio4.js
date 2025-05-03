function edad(fechaNac){
    const hoy = new Date();
    const nacimiento = new Date(fechaNac);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    //verifico si aun no cumplio años en el año
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNac = nacimiento.getDate();
    const diaNac = nacimiento.getDate();


    if(mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)){
        edad--;
    }
    return edad;
}

console.log(edad("2006-03-16"));
console.log(edad("2000-10-19"));
