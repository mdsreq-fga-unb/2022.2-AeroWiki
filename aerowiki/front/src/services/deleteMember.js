import { api } from "../api/config";

export async function deleteMember( {email} ) {
  console.log("dentro da deleteMember", email)
  const resposta = await api.put("/deleteMember", { email } );
  console.log(resposta)
  return resposta;
}