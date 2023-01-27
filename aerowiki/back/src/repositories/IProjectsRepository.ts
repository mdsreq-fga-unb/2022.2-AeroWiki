import { Project } from "../entities/Project";

export interface IProjectsRepository {
//   findByEmail(email: string): Promise<User>
    saveProject(project: Project): Promise<void>
//   updateUser(name: string, email: string, telephone: string, unb_id: string, password: string): Promise<void>
    updateProject(id: string,
        name: string,
        isfixed: boolean,
        editable: boolean,
        ongoing: boolean,
        active: boolean,
        project: object): Promise<void>
//   deleteMember(email: string): Promise<void>
}