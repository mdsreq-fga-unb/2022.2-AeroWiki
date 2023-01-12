import { api } from '../api/config';

export async function Add_membro() {
  const resposta = await api.get('/membros', {},)
    return resposta
}
