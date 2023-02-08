import { IProjectsRepository } from "../IProjectsRepository";
import { Project } from "../../entities/Project";
import * as mongoose from "mongoose";
import { ProjectSchema } from "../../schemas/ProjectSchema";

export class MongodbProjectImplementation implements IProjectsRepository {
  private repository = mongoose.model("Project", ProjectSchema);

  async getProjects(): Promise<any> {
    const projectsList = await this.repository.find();
    return projectsList;
  }

  async saveProject(project: Project): Promise<void> {
    const projectCreated = await this.repository.create(project);
  }

  async updateProject(id: string, name: string, isfixed: boolean, editable: boolean, ongoing: boolean, active: boolean): Promise<void> {
    const projectUpdate = await this.repository.findOneAndUpdate(
      {
        id: id,
      },
      {
        name: name,
        isfixed: isfixed,
        editable: editable,
        ongoing: ongoing,
        active: active
      },
      {
        new: true,
      }
    );
  }

  async updateProjectData(id: string, project: object): Promise<void> {
    const projectDataUpdate = await this.repository.findOneAndUpdate(
      {
        _id: id,
      },
      {
        project: {'blocks': project}
      },
      {
        new: true,
      }
    );
  }

  async deleteProject(id: string): Promise<void> {
    const projectDeleted = await this.repository.findOneAndDelete(
      {
        id: id
      }
    )
  }
}
