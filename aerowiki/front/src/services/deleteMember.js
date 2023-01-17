import { api } from "../api/config";

export async function deleteMember({ email }) {
  const resposta = await api.delete("/deleteMember", { email: "gabrielribeiro@zenit.com" });
  console.log(resposta)
  return resposta;
}