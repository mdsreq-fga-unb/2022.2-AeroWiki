function verificaNumero(senha) {
    const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let numero of numeros) {
        if (senha.includes(numero)) return true;
    }

    return false;
}

function verificaCapital(senha) {
    return /[A-Z]/.test(senha);
}

function verificaTamanho(senha) {
    if(senha.length > 7) return true
    return false
}



module.exports = {verificaNumero, verificaCapital, verificaTamanho};