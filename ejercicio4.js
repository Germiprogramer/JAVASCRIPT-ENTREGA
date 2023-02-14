function comprobaraño (dia, mes, año) {
    var fecha = new Date(año, mes, dia);
    var dia_semana = fecha.getDay();
    var semanadelano = fecha.getWeek();
    var bisiesto = fecha.isLeapYear();

    document.write("El dia de la semana es: " + dia_semana);
}

function recibir () {
    var fecha = $("#fecha").val()
    var dia_semana = fecha.getDay();

    document.getElementById("texto").innerText("El dia de la semana es: " + dia_semana);

}


document.getElementById("fecha").addEventListener("change", recibir);


