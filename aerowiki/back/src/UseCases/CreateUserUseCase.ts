import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ){}
  async execute(data: ICreateUserRequestDTO){
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists){
      throw new Error('User already exist')
    }

    const user = new User(data)

    await this.usersRepository.saveUser(user)
  }

}