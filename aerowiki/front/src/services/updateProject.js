import { api } from "../api/config";

export async function updateProject({ id, name, isfixed, editable, ongoing, active }) {
  const response = await api.put("/updateProject", {
    id,
    name,
    isfixed,
    editable,
    ongoing,
    active
  });
  return response
}
