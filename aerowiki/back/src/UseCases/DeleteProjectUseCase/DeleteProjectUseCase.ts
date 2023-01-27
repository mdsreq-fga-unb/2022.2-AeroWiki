import { IProjectsRepository } from "../../repositories/IProjectsRepository";
import { IDeleteProjectRequest } from "./DeleteProjectDTO"

export class DeleteProjectUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}
  async execute(data: IDeleteProjectRequest) {
    await this.projectsRepository.deleteProject(
      data.id
    );
  }
}
