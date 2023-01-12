import { api } from '../api/config';

export async function MembersDataname() {
  const resposta = await api.get('/membros', {},)
    return resposta
}
