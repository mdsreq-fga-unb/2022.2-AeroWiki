import { api } from '../api/config';

export async function setUser(name, surname, email, unb_id, area, role, telephone, birthdate, cpf, rg){
    const response = await api.post('/membros', {
      name, surname, email, unb_id, area, role, telephone, birthdate, cpf, rg,
    },
    )
    return response
}
