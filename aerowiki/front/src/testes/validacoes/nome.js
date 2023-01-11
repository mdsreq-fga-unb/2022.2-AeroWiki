function Nome(nome) {
    const regexN = /[0-9]/;
    const regexC = /[@!#$%^&*()/\\~]/;
    if (regexN.test(nome) == false) {
        if (regexC.test(nome) == false) {
            return "valido"
        } else {
            return "invalido"
        }
    } else {
        return "invalido"
    }
}

module.exports = Nome;