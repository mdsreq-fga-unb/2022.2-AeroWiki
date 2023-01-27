import { Project } from "../../entities/Project";
import { IProjectsRepository } from "../../repositories/IProjectsRepository";
import { INewProjectRequestDTO } from "./NewProjectDTO";

export class NewProjectUseCase {
  constructor (
    private projectsRepository: IProjectsRepository
  ){}
  async execute(data: INewProjectRequestDTO){
    // const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    // if (userAlreadyExists){
    //   throw new Error('User already exist')
    // }

    const project = new Project(data)

    await this.projectsRepository.saveProject(project)
  }

}