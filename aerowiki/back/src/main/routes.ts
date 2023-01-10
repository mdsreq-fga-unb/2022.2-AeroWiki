import { Router } from "express";
import {createUserController} from '../UseCases'


const router =  Router()

router.post('/membros', (request, response) => {
  return createUserController.handle(request, response);
});

export {router}