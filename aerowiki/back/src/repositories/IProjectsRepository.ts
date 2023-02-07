import { Project } from "../entities/Project";

export interface IProjectsRepository {
    getProjects(): Promise<any>

    saveProject(project: Project): Promise<void>

    updateProject(id: string,
        name: string,
        isfixed: boolean,
        editable: boolean,
        ongoing: boolean,
        active: boolean): Promise<void>

    updateProjectData(id: string,
        project: object): Promise<void>
        
    deleteProject(id: string): Promise<void>
}