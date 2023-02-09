function imprimirnumeros() {
    var i = 0;
    for (i; i<=100; i++) {
        if (i%3==0) {
            console.log(i + "es divisible entre 3");
        }
        else if (i%5==0) {
            console.log(i + "es divisible entre 5");
        }
        else if (i%3==0 && i%5==0) {
            console.log(i + "es divisible entre 3 y 5");
        }
        else {
            console.log(i);
        }
    }
}