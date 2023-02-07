import { IProjectsRepository } from "../IProjectsRepository";
import { Project } from "../../entities/Project";
import * as mongoose from "mongoose";
import { ProjectSchema } from "../../schemas/ProjectSchema";

export class MongodbProjectImplementation implements IProjectsRepository {
  private repository = mongoose.model("Project", ProjectSchema);

  // async findByEmail(email: string): Promise<User> {
  //   const user = await this.repository.findOne({ email });

  //   return user;
  // }

  async saveProject(project: Project): Promise<void> {
    const projectCreated = await this.repository.create(project);
  }

  // async updateUser(
  //   name: string,
  //   email: string,
  //   telephone: string,
  //   unb_id: string,
  //   password: string
  // ): Promise<void> {
  //   const userUpdated = await this.repository.findOneAndUpdate(
  //     {
  //       unb_id: unb_id,
  //     },
  //     {
  //       name: name,
  //       email: email,
  //       telephone: telephone,
  //       password: password
  //     },
  //     {
  //       new: true,
  //     }
  //   );
  // }

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
        project: project
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
