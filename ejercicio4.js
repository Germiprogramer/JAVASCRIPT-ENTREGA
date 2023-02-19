
var boton = document.getElementById("boton");


boton.addEventListener("click", sacarfecha)

function esbisiesto (anio) {
    if (anio/400 == 0) {
        var bisiesto = true
    } 
    else if (anio/100 == 0) {
        var bisiesto = false
    }
    else if (anio/4 == 0) {
        var bisiesto = true
    }
    else {
        var bisiesto = false
    }
    if (bisiesto == true) {
        return "El anio es bisiesto"
    }
    else {
        return "El anio no es bisiesto"
    }

}

function diadelasemana (date) {
    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

    var num_dia = date.getDay()
    var dia = dias[num_dia]
    return dia
}

function semanadelanio (date) {
    var unoenero = new Date(date.getFullYear(), 0, 1);
    var numerodedias = Math.floor((date - unoenero) / (24 * 60 * 60 * 1000));
    var resultado = Math.ceil((date.getDay() + 1 + numerodedias) / 7);
    return resultado
}

function sacarfecha() {
    var parrafo = document.getElementById("parrafo");
    var anio = document.getElementById("anio").value;
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value;
    var date = new Date(anio,mes,dia)
    parrafo.innerHTML = "El dia de la semana es: " + diadelasemana(date) + "<br>" + esbisiesto(anio) + "<br>" + "La semana del anio es: " + semanadelanio(date); 
}











