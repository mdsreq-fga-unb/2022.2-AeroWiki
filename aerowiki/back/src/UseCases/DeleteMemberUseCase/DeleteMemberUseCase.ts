import { IUsersRepository } from "../../repositories/IUsersRepository";

export class DeleteMemberUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute(email: string) {
    await this.usersRepository.deleteMember(
      email
    );
  }
}
