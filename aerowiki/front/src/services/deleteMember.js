import { api } from "../api/config";

export async function deleteMember( {email} ) {
  console.log("dentro da deleteMember", email)
  const resposta = await api.delete("/deleteMember", {data: { email: email }} );
  console.log(resposta)
  return resposta;
}