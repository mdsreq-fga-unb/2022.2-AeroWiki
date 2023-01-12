import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ILoginRequestDTO } from "../../UseCases/LoginUseCase/LoginDTO";

export class LoginUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ){}
  async execute(data: ILoginRequestDTO){
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (!userAlreadyExists){
        throw Error("Esse usuário não existe!");
    }
    return(userAlreadyExists)
  }
}