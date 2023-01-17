function testedetoken() {
    const email = sessionStorage.getItem('emailReal')
    const senha = sessionStorage.getItem('senhaReal')
    if (email != null ){
        if(senha != null){
            return true
        }else{
            window.location.href = ('/login')
            return false
        }
    }else{
        window.location.href = ('/login')
        return false
    }
}
module.exports = testedetoken;