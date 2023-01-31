import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IDeleteMemberRequest } from "./DeleteMemberDTO"

export class DeleteMemberUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute(data: IDeleteMemberRequest) {
    await this.usersRepository.deleteMember(
      data.email
    );
  }
}
