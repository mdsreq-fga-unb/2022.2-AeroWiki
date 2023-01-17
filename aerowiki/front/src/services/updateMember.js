import { api } from "../api/config";

export async function updateMember({ area, role, email }) {
  const resposta = await api.put("/updateMember", { area, role, email });
  return resposta;
}
