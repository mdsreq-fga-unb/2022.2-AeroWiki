import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUpdateUserRequest } from "./UpdateUserUseCaseDTO";

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }
  async execute(data: IUpdateUserRequest) {
    await this.usersRepository.updateUser(
      data.name,
      data.email,
      data.telephone,
      data.unb_id,
      data.password
    );
  }
}
