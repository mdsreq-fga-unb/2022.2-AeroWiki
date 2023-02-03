import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ILoginRequestDTO } from "../../UseCases/LoginUseCase/LoginDTO";

export class LoginUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) { }
  async execute(reqData: ILoginRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(reqData.email)

    if (!userExists) {
      throw Error("Usuário não cadastrado!")
    }
    else if (userExists.password !== reqData.password) {
      throw Error("Senha inválida.");
    }
    else if (!userExists.active) {
      throw Error("Conta inativa.");
    }

    return (userExists)
  }
}