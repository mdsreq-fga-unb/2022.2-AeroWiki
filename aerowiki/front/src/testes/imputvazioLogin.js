function imputvazioLogin(emailLogin, senhaLogin) {
    if (emailLogin != undefined && emailLogin != "") {
        if (senhaLogin != undefined && senhaLogin != "") {
            return "passou"
        } else {
            return "vazio"
        }
    } else {
        return "vazio"
    }
}
module.exports = imputvazioLogin;