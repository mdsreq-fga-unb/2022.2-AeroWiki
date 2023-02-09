import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetMembersUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute() {
    return await this.usersRepository.getMembers()
  }
}
