export function setUser(name, surname, email, unb_id, area, role, telephone, birthdate, cpf, rg){
    return fetch('http://localhost:3333/membros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {name, surname, email, unb_id, area, role, telephone, birthdate, cpf, rg} )
    })
      .then(data => data.json())
  }