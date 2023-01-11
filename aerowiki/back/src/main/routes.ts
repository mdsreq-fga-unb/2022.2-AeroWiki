import { Router } from "express";
import {createUserController} from '../UseCases'
import {loginController} from '../UseCases'

const router =  Router()

router.post('/membros', (request, response) => {
  return createUserController.handle(request, response);
});

router.post('/login', (request, response) => {
  return loginController.handle(request, response);
});

export {router}