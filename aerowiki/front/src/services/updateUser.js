import { api } from '../api/config';

export async function updateUser(name, email, unb_id, telephone, password) {
  const resposta = await api.put('/updateUser', {name, email, unb_id, telephone, password},)
    return resposta
}