import { api } from '../api/config';
// import imputvazio from '../testes/imputvazio';

export async function addMember(name, surname, email, unb_id, area, role, telephone, birthdate, cpf, rg) {
    const response = await api.post('/membros', {
      name, surname, email, unb_id, area, role, telephone, birthdate, cpf, rg,
    })
    return response
}
