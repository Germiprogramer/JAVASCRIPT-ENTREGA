function comprobarArmstrong(numero) {
    var num = numero;
    var e, d = 0;
    while (numero >0) {
        e = numero % 10;
        d = d + (e * e * e);
        numero = parseInt(numero / 10);
    }
    if (d == num) {
        return true;
    }
    else {
        return false;
    }
}

function hallararmstrong() {
    for (var i = 100; i <= 1000; i++) {
        if (comprobarArmstrong(i) == true) {
            document.write(i + " es un numero de Armstrong" + "<br>");
        }
    }
}

hallararmstrong();