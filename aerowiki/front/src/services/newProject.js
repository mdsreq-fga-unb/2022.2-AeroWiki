import { api } from '../api/config';
// import imputvazio from '../testes/imputvazio';

export async function newProject(name, area, subarea, editable) {
  // if (imputvazio(name, surname, email, unb_id, area, role, cpf, rg) === 'passou') {
    const resposta = await api.post('/newProject', { name, area, subarea, editable },)
    console.log("newProject", resposta)
    return resposta
  // }else{
  //   return "repetiu"
  // }
}
