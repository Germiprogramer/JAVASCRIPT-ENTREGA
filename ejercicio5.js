var boton = document.getElementById("boton2");

function validaCorreo() {
    var correo = document.getElementById("correo");  

    var expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (expresion.test(correo.value)) {
        alert("Correo valido")
    }
    else {
        correo.style.borderColor = "red";
        correo.preventDefault();
    }
}




