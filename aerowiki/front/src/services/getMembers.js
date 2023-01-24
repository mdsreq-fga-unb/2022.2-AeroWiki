import { api } from '../api/config';

export async function getMembers() {
  const resposta = await api.get('/getMembers', {})
  return resposta
}
