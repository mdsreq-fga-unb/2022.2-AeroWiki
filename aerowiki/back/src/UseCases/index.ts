import { MongodbImplementation } from "../repositories/implementations/UserRepository-mongodb";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const userRepository = new MongodbImplementation()


const createUserUseCase = new CreateUserUseCase(
  userRepository
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }