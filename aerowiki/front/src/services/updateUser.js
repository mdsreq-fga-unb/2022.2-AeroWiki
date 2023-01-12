import { api } from '../api/config';

export async function updateUser(name, email, telephone, unb_id) {
  const resposta = await api.put('/updateUser', {name, email, telephone, unb_id},)
    return resposta
}