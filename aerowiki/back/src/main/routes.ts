import { Router } from "express";
import mongoose from "mongoose";
import { UserSchema } from '../schemas/UserSchema'
import { ProjectSchema } from '../schemas/ProjectSchema'
import {
  getMembersController,
  createUserController,
  updateMemberController,
  updateUserController,
  deleteMemberController,
  loginController,

  getProjectsController,
  newProjectController,
  updateProjectController,
  updateProjectDataController,
  deleteProjectController
} from '../UseCases'

const router = Router()

//Pega lista de membros do banco
router.get('/getMembers', (request, response) => {
  return getMembersController.handle(request, response)
});

// Cadastra novo membro no banco de dados da aplicação
router.post('/membros', (request, response) => {
  return createUserController.handle(request, response);
});

// Autoexplicativo
router.post('/login', (request, response) => {
  return loginController.handle(request, response);
});

// Edita campos pessoais do do usuário  da aplicação no banco de dados
router.put('/updateUser', (request, response) => {
  return updateUserController.handle(request, response)
})

// Edita campos públicos dos membros no banco de dados * rota privada *
router.put('/updateMember', (request, response) => {
  return updateMemberController.handle(request, response)
})

// Remove permanentemente algum membro do banco de dados
router.delete('/deleteMember', (request, response) => {
  return deleteMemberController.handle(request, response)
})



//
router.get('/getProjects', (request, response) => {
  return getProjectsController.handle(request, response)
});

// Cria projeto no banco de dados
router.post('/newProject', (request, response) => {
  return newProjectController.handle(request, response)
})

// Edita projeto no banco de dados
router.put('/updateProject', (request, response) => {
  return updateProjectController.handle(request, response)
})

// Edita texto do projeto no banco de dados
router.put('/updateProjectData', (request, response) => {
  return updateProjectDataController.handle(request, response)
})

// Remove permanentemente um projeto do banco de dados
router.delete('/deleteProject', (request, response) => {
  return deleteProjectController.handle(request, response)
})

export { router }