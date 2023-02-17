function imprimirnumeros() {
    var i = 0;
    for (i; i<=100; i++) {
        if (i%3==0 && i%5!=0) {
            document.write(i + " es divisible entre 3" +  "<br>");
        }
        else if (i%5==0 && i%3!=0) {
            document.write(i + " es divisible entre 5" + "<br>");
        }
        else if (i%3==0 && i%5==0) {
            document.write(i + " es divisible entre 3 y 5" +  "<br>");
        }
        else {
            document.write(i +  " no es divisible entre ninguno de los dos numeros" + "<br>");
        }
    }
}

imprimirnumeros();