import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ){}
  async execute(data: ICreateUserRequestDTO){
    const emailAlreadyExists = await this.usersRepository.findByEmail(data.email)
    const idAlreadyExists = await this.usersRepository.findById(data.unb_id)

    if (emailAlreadyExists || idAlreadyExists){
      throw new Error('Este membro já está cadastro')
    }

    const user = new User(data)

    await this.usersRepository.saveUser(user)
  }

}