var anio = document.getElementById("anio");
var mes = document.getElementById("mes");
var dia = document.getElementById("dia");
var boton = document.getElementById("boton");
var parrafo = document.getElementById("parrafo");






function sacarfecha() {
    var date = new Date(anio,mes,dia)
    document.write(date)
}

function esbisiesto () {
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
    return bisiesto

}

function diadelasemana () {
    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

    var num_dia = date.getDay()
    var dia = dias[num_dia]
    return dia
}

function 









/*
function esbisiesto (fecha) {
    var bisiesto = datefecha.isLeapYear();
    return bisiesto
}

function imprimir(fecha) {
    document.write(esbisiesto(fecha))
}

boton.addEventListener("click", imprimir(date))
*/