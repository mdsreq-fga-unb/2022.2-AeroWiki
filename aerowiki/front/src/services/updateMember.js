import { api } from "../api/config";

export async function updateMember({ area, role, email, active }) {
  const resposta = await api.put("/updateMember", { area, role, email, active });
  return resposta;
}
