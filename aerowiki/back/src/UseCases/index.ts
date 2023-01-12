import { MongodbImplementation } from "../repositories/implementations/UserRepository-mongodb";
import { CreateUserUseCase } from "./CreateUserUseCase/CreateUserUseCase";
import { CreateUserController } from "./CreateUserUseCase/CreateUserController";
import { LoginController } from "./LoginUseCase/LoginController";
import { LoginUseCase } from "./LoginUseCase/LoginUseCase";
import { UpdateUserUseCase } from "../UseCases/UpdateUserUseCase/UpdateUserUseCase";
import { UpdateUserController } from "../UseCases/UpdateUserUseCase/UpdateUserController";
import { UpdateMemberUseCase } from "../UseCases/UpdateMemberUseCase/UpdateMemberUseCase";
import { UpdateMemberController } from "../UseCases/UpdateMemberUseCase/UpdateMemberController";

const userRepository = new MongodbImplementation();

const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(createUserUseCase);

const loginUseCase = new LoginUseCase(userRepository);

const loginController = new LoginController(loginUseCase);

const updateUserUseCase = new UpdateUserUseCase(userRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

const updateMemberUseCase = new UpdateMemberUseCase(userRepository);

const updateMemberController = new UpdateMemberController(updateMemberUseCase);

export {
  createUserUseCase,
  createUserController,
  loginUseCase,
  loginController,
  updateUserUseCase,
  updateUserController,
  updateMemberUseCase,
  updateMemberController,
};
