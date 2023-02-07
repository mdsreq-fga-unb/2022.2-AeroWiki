import { api } from "../api/config";

export async function updateProjectData( id, project ) {
    console.log("dentro da funcao", id, project)
    const response = await api.put("/updateProjectData", { id, project });
    return response
}