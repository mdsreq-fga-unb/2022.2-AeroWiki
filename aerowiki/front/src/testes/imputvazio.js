function imputvazio(name, surname, email, unb_id, area, role, cpf, rg) {
  if (name != undefined && name != ""){
    if (surname != undefined && surname != ""){
      if (email != undefined && email != ""){
        if (unb_id != undefined && unb_id != ""){
          if (area != undefined && area != ""){
            if (role != undefined && role != ""){
              if (cpf != undefined && cpf != ""){
                if (rg != undefined && rg != ""){
                  return "passou"
                }
              }
            }
          }
        }
      }
    }
  }

  return "repetiu"
}

module.exports = imputvazio;