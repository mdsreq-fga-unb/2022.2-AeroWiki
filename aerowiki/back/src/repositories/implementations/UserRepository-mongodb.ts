import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import * as mongoose from "mongoose";
import { UserSchema } from "../../schemas/UserSchema";

export class MongodbUserImplementation implements IUsersRepository {
  private repository = mongoose.model("User", UserSchema);

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(unb_id: string): Promise<User> {
    const user = await this.repository.findOne({ unb_id });
    return user;
  }

  async saveUser(user: User): Promise<void> {
    const userCreated = await this.repository.create(user);
  }

  async updateUser(
    name: string,
    email: string,
    telephone: string,
    unb_id: string,
    password: string
  ): Promise<void> {
    const userUpdated = await this.repository.findOneAndUpdate(
      {
        unb_id: unb_id,
      },
      {
        name: name,
        email: email,
        telephone: telephone,
        password: password
      },
      {
        new: true,
      }
    );
  }
  async updateMember(area: string, role: string, email: string, active: boolean): Promise<void> {
    const memberUpdate = await this.repository.findOneAndUpdate(
      {
        email: email,
      },
      {
        area: area,
        role: role,
        active: active
      },
      {
        new: true,
      }
    );
  }
  async deleteMember(email: string): Promise<void> {
    const memberDeleted = await this.repository.findOneAndDelete(
    {
      email: email
    }
    )
  }
}
