import { api } from "../api/config";

export async function updateProjectData( id, project ) {
    const response = await api.put("/updateProjectData", { id, project });
    return response
}