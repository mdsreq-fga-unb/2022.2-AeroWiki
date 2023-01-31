import { IProjectsRepository } from "../../repositories/IProjectsRepository";
import { IUpdateProjectDataRequest } from "./UpdateProjectDataDTO";

export class UpdateProjectDataUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}
  async execute(data: IUpdateProjectDataRequest) {
    await this.projectsRepository.updateProjectData(
      data.id,
      data.project);
  }
}
