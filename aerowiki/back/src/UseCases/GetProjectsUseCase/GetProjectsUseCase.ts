import { IProjectsRepository } from "../../repositories/IProjectsRepository";

export class GetProjectsUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}
  async execute() {
    return await this.projectsRepository.getProjects()
  }
}
