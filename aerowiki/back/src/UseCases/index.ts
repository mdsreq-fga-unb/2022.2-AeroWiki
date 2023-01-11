import { MongodbImplementation } from "../repositories/implementations/UserRepository-mongodb";
import { CreateUserUseCase } from "./CreateUserUseCase/CreateUserUseCase";
import { CreateUserController } from "./CreateUserUseCase/CreateUserController";
import { LoginController } from "./LoginUseCase/LoginController";
import { LoginUseCase } from "./LoginUseCase/LoginUseCase";

const userRepository = new MongodbImplementation()


const createUserUseCase = new CreateUserUseCase(
  userRepository
)

const createUserController = new CreateUserController(
  createUserUseCase
)

const loginUseCase = new LoginUseCase(
  userRepository
)

const loginController = new LoginController(
  loginUseCase
)

export { createUserUseCase, createUserController, loginUseCase, loginController }