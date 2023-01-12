import { api } from '../api/config';

export async function updateUser(name, email, unb_id, telephone) {
  const resposta = await api.put('/updateUser', {name, email, unb_id, telephone},)
    return resposta
}