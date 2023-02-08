import { api } from "../api/config";

export async function deleteProject({ id }) {
  const response = await api.delete("/deleteProject", { data: { id: id } });
  return response
}