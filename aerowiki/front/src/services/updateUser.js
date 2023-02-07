import { api } from '../api/config';

export async function updateUser(name, email, unb_id, telephone, password) {
  const response = await api.put('/updateUser', { name, email, unb_id, telephone, password })
  return response
}