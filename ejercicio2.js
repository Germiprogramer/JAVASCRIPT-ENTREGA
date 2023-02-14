function comparar(a, b) {
    return document.write(a == b, "<br>");
}

comparar("", "0")
comparar(0, "")
comparar(0, "0")
comparar(false, "false")
comparar(false, "0")
comparar(false, undefined)
comparar(false, null)
comparar(null, undefined)