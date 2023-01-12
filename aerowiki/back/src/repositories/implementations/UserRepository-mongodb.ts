import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import * as mongoose from "mongoose";
import { UserSchema } from "../../schemas/user-schema";

export class MongodbImplementation implements IUsersRepository {
  private repository = mongoose.model("User", UserSchema);

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async saveUser(user: User): Promise<void> {
    const userCreated = await this.repository.create(user);
  }

  async updateUser(
    name: string,
    email: string,
    telephone: string,
    unb_id: string
  ): Promise<void> {
    const userUpdated = await this.repository.findOneAndUpdate(
      {
        unb_id: unb_id,
      },
      {
        name: name,
        email: email,
        telephone: telephone,
      },
      {
        new: true,
      }
    );
  }
  async updateMember(area: string, role: string, email: string): Promise<void> {
    const memberUpdate = await this.repository.findOneAndUpdate(
      {
        email: email,
      },
      {
        area: area,
        role: role,
      },
      {
        new: true,
      }
    );
  }
}
