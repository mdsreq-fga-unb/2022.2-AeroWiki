import { IProjectsRepository } from "../../repositories/IProjectsRepository";
import { IUpdateProjectRequest } from "./UpdateProjectDTO";

export class UpdateProjectUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}
  async execute(data: IUpdateProjectRequest) {
    await this.projectsRepository.updateProject(
      data.id,
      data.name,
      data.isfixed,
      data.editable,
      data.ongoing,
      data.active);
  }
}
