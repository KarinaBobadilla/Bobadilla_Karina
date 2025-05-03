function fecha(dias){
    const fechaActual = new Date();

    fechaActual.setDate(fechaActual.getDate() + dias);

    const diasSemana = ['lunes' , 'martes' , 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const diaSem = diasSemana[fechaActual.getDay()];
    const diames = fechaActual.getDate();
    const mes = meses[fechaActual.getMonth()];
    const año = fechaActual.getFullYear();

    return `${diaSem} ${diames} de ${mes} de ${año}`;
}

console.log(fecha(10));
console.log(fecha(-10));