import { api } from '../api/config';
import imputvazio from '../testes/imputvazio';

export async function setUser(name, surname, email, unb_id, area, role, telephone, birthdate, cpf, rg) {
  if (imputvazio(name, surname, email, unb_id, area, role, cpf, rg) == 'passou') {
    const resposta = await api.post('/membros', {
      name, surname, email, unb_id, area, role, telephone, birthdate, cpf, rg,
    },
    )
    return resposta
  }else{
    return "repetiu"
  }
}
