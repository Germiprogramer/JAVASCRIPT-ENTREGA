function comprobarArmstrong(numero) {
    var suma = 0;
    for (var i = 0; i < numero; i++) {
        for (var j = 0; j < numero; j++) {
            for (var k = 0; k < numero; k++) {
                var suma = i**3 + j**3 + k**3;
                if (suma == numero) {
                    return true;
                }
            }
        }
    
    }
    return false;
}

function hallararmstrong() {
    for (var i = 1; 100 <= i <= 1000; i++) {
        if (comprobarArmstrong(i) == true) {
            document.write(i + " es un numero de Armstrong" + "<br>");
        }
    }
}

hallararmstrong();