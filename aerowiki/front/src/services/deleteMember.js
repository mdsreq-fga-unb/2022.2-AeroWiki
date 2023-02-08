import { api } from "../api/config";

export async function deleteMember({ email }) {
  const resposta = await api.delete("/deleteMember", { data: { email: email } });
  return resposta;
}