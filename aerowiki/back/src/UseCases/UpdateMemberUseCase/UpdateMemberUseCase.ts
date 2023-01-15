import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUpdateMemberRequest } from "./UpdateMemberDTO";

export class UpdateMemberUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute(data: IUpdateMemberRequest) {

    await this.usersRepository.updateMember(
      data.area,
      data.role,
      data.email
    );
  }
}
