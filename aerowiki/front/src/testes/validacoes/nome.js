function Nome(nome) {
    const regexN = /[0-9]/;
    const regexC = /[@!#$%^&*()/\\~]/;
    if (regexN.test(nome) === false) {
        if (regexC.test(nome) === false) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

module.exports = Nome;