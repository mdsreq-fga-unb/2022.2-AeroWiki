function imputvazioLogin(emailLogin, senhaLogin) {
    if (emailLogin !== undefined && emailLogin !== "") {
        if (senhaLogin !== undefined && senhaLogin !== "") {
            return "passou"
        }
    }    
    
    return "vazio"
}
module.exports = imputvazioLogin;