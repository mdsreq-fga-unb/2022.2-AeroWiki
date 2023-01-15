import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUpdateUserRequest } from "./UpdateUserUseCaseDTO";

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute(data: IUpdateUserRequest) {
    console.log("dps aqui")
    await this.usersRepository.updateUser(
      data.name,
      data.email,
      data.telephone,
      data.unb_id
    );
  }
}
