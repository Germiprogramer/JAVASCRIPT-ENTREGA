function comprobaraño (dia, mes, año) {
    var fecha = new Date(año, mes, dia);
    var dia_semana = fecha.getDay();
    var semanadelano = fecha.getWeek();
    var bisiesto = fecha.isLeapYear();

    console.log("El dia de la semana es: " + dia_semana);
}