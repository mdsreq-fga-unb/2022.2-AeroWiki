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
import { GetProjectsUseCase } from "./GetProjectsUseCase/GetProjectsUseCase";
import { GetProjectsController } from "./GetProjectsUseCase/GetProjectsController";
import { NewProjectController } from "../UseCases/NewProjectUseCase/NewProjectController";
import { NewProjectUseCase } from "../UseCases/NewProjectUseCase/NewProjectUseCase";
import { UpdateProjectController } from "../UseCases/UpdateProjectUseCase/UpdateProjectController";
import { UpdateProjectUseCase } from "../UseCases/UpdateProjectUseCase/UpdateProjectUseCase";
import { UpdateProjectDataController } from "../UseCases/UpdateProjectDataUseCase/UpdateProjectDataController";
import { UpdateProjectDataUseCase } from "../UseCases/UpdateProjectDataUseCase/UpdateProjectDataUseCase";
import { DeleteProjectController } from "../UseCases/DeleteProjectUseCase/DeleteProjectController";
import { DeleteProjectUseCase } from "../UseCases/DeleteProjectUseCase/DeleteProjectUseCase";

//Repositório de métodos da entidade User
const userRepository = new MongodbUserImplementation();

//GetMembers
const getMembersUseCase = new GetMembersUseCase(userRepository);

const getMembersController = new GetMembersController(getMembersUseCase);

//CreateUser
const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(createUserUseCase);

//Login
const loginUseCase = new LoginUseCase(userRepository);

const loginController = new LoginController(loginUseCase);

//UpdateUser
const updateUserUseCase = new UpdateUserUseCase(userRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

//UpdateMember
const updateMemberUseCase = new UpdateMemberUseCase(userRepository);

const updateMemberController = new UpdateMemberController(updateMemberUseCase);

//DeleteMember
const deleteMemberUseCase = new DeleteMemberUseCase(userRepository);

const deleteMemberController = new DeleteMemberController(deleteMemberUseCase);





//Repositório de métodos da entidade Project
const projectRepository = new MongodbProjectImplementation();

//GetProjects
const getProjectsUseCase = new GetProjectsUseCase(projectRepository);

const getProjectsController = new GetProjectsController(getProjectsUseCase);

//NewProject
const newProjectUseCase = new NewProjectUseCase(projectRepository);

const newProjectController = new NewProjectController(newProjectUseCase);

//UpdateProject
const updateProjectUseCase = new UpdateProjectUseCase(projectRepository);

const updateProjectController = new UpdateProjectController(updateProjectUseCase);

//UpdateProjectData
const updateProjectDataUseCase = new UpdateProjectDataUseCase(projectRepository);

const updateProjectDataController = new UpdateProjectDataController(updateProjectDataUseCase);

//DeleteProject
const deleteProjectUseCase = new DeleteProjectUseCase(projectRepository);

const deleteProjectController = new DeleteProjectController(deleteProjectUseCase);


//Exports para serem usados nas rotas (../main/routes)
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

  getProjectsController,
  newProjectUseCase,
  newProjectController,
  updateProjectUseCase,
  updateProjectController,
  updateProjectDataUseCase,
  updateProjectDataController,
  deleteProjectUseCase,
  deleteProjectController,
};
