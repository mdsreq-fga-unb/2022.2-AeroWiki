function email(email) {
    email.indexOf("@")
    if(email.indexOf("@") === -1){
        return false
    }else{
        return true
    }
}

module.exports = email;