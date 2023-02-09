function testedetoken() {
  const email = sessionStorage.getItem("email")
  const senha = sessionStorage.getItem("senha")

  if (email === null || senha === null) {
    window.location.href = "/login";
    return false;
  } 
  else {
    return true
  }
}
module.exports = testedetoken;
