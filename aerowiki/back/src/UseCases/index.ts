import { MongodbUserImplementation } from "../repositories/implementations/UserRepository-mongodb";
import { CreateUserUseCase } from "./CreateUserUseCase/CreateUserUseCase";
import { CreateUserController } from "./CreateUserUseCase/CreateUserController";
import { LoginController } from "./LoginUseCase/LoginController";
import { LoginUseCase } from "./LoginUseCase/LoginUseCase";
import { UpdateUserUseCase } from "../UseCases/UpdateUserUseCase/UpdateUserUseCase";
import { UpdateUserController } from "../UseCases/UpdateUserUseCase/UpdateUserController";
import { UpdateMemberUseCase } from "../UseCases/UpdateMemberUseCase/UpdateMemberUseCase";
import { UpdateMemberController } from "../UseCases/UpdateMemberUseCase/UpdateMemberController";
import { DeleteMemberUseCase } from "../UseCases/DeleteMemberUseCase/DeleteMemberUseCase";
import { DeleteMemberController } from "../UseCases/DeleteMemberUseCase/DeleteMemberController";

import { MongodbProjectImplementation } from "../repositories/implementations/ProjectRepository-mongodb";
import { NewProjectController } from "../UseCases/NewProjectUseCase/NewProjectController";
import { NewProjectUseCase } from "../UseCases/NewProjectUseCase/NewProjectUseCase";
import { UpdateProjectController } from "../UseCases/UpdateProjectUseCase/UpdateProjectController";
import { UpdateProjectUseCase } from "../UseCases/UpdateProjectUseCase/UpdateProjectUseCase";

const userRepository = new MongodbUserImplementation();

const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(createUserUseCase);

const loginUseCase = new LoginUseCase(userRepository);

const loginController = new LoginController(loginUseCase);

const updateUserUseCase = new UpdateUserUseCase(userRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

const updateMemberUseCase = new UpdateMemberUseCase(userRepository);

const updateMemberController = new UpdateMemberController(updateMemberUseCase);

const deleteMemberUseCase = new DeleteMemberUseCase(userRepository);

const deleteMemberController = new DeleteMemberController(deleteMemberUseCase);



const projectRepository = new MongodbProjectImplementation();

const newProjectUseCase = new NewProjectUseCase(projectRepository);

const newProjectController = new NewProjectController(newProjectUseCase);

const updateProjectUseCase = new UpdateProjectUseCase(projectRepository);

const updateProjectController = new UpdateProjectController(updateProjectUseCase);

export {
  createUserUseCase,
  createUserController,
  loginUseCase,
  loginController,
  updateUserUseCase,
  updateUserController,
  updateMemberUseCase,
  updateMemberController,
  deleteMemberUseCase,
  deleteMemberController,
  newProjectUseCase,
  newProjectController,
  updateProjectUseCase,
  updateProjectController
};
