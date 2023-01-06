import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import * as mongoose from 'mongoose';
import { UserSchema } from "../../schemas/user-schema";



export class MongodbImplementation implements IUsersRepository{
  private repository = mongoose.model("User", UserSchema);
  


  async findByEmail(email: string): Promise<User>{
   const user = await this.repository.findOne({email})

   return user;
  }

  async saveUser(user: User): Promise<void>{
    const userCreated = await this.repository.create(user)

    console.log(userCreated)
  }
}