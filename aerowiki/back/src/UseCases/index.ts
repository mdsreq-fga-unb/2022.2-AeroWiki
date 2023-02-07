import { MongodbUserImplementation } from "../repositories/implementations/UserRepository-mongodb";
import { GetMembersUseCase } from "./GetMembersUseCase/GetMembersUseCase";
import { GetMembersController } from "./GetMembersUseCase/GetMembersController";
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
import { UpdateProjectDataController } from "../UseCases/UpdateProjectDataUseCase/UpdateProjectDataController";
import { UpdateProjectDataUseCase } from "../UseCases/UpdateProjectDataUseCase/UpdateProjectDataUseCase";
import { DeleteProjectController } from "../UseCases/DeleteProjectUseCase/DeleteProjectController";
import { DeleteProjectUseCase } from "../UseCases/DeleteProjectUseCase/DeleteProjectUseCase";

const userRepository = new MongodbUserImplementation();

const getMembersUseCase = new GetMembersUseCase(userRepository);

const getMembersController = new GetMembersController(getMembersUseCase);

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

const updateProjectDataUseCase = new UpdateProjectDataUseCase(projectRepository);

const updateProjectDataController = new UpdateProjectDataController(updateProjectDataUseCase);

const deleteProjectUseCase = new DeleteProjectUseCase(projectRepository);

const deleteProjectController = new DeleteProjectController(deleteProjectUseCase);

export {
  getMembersController,
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
  updateProjectController,
  updateProjectDataUseCase,
  updateProjectDataController,
  deleteProjectUseCase,
  deleteProjectController,
};
