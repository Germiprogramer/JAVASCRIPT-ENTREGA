function comprobarArmstrong(numero) {
    var numeroString = numero.toString();
    var suma = 0;
    for (var i = 0; i < numeroString.length; i++) {
        suma += Math.pow(numeroString[i], numeroString.length);
    }
    return suma==numero;
}

function hallararmstrong() {
    for (var i = 1; 100 <= i <= 1000; i++) {
        if (comprobarArmstrong(i) == true) {
            document.write(i + " es un numero de Armstrong" + "<br>");
        }
    }
}

hallararmstrong();