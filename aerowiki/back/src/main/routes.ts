import { Router } from "express";
import {createUserController, updateMemberController, updateUserController, deleteMemberController} from '../UseCases'
import {loginController} from '../UseCases'
import mongoose from "mongoose";
import {UserSchema} from '../schemas/user-schema'

const router =  Router()

router.get('/membros', (request, response) => {
  const UsersData = mongoose.model('User', UserSchema)
  UsersData.find((error, data) => {
    if (error){
      console.log(error)
    }
    else{
      response.json(data)
    }
  })
});

router.post('/membros', (request, response) => {
  return createUserController.handle(request, response);
});

router.post('/login', (request, response) => {
  return loginController.handle(request, response);
});

router.put('/updateUser', (request, response) => {
  return updateUserController.handle(request, response)
})

router.put('/updateMember', (request, response) => {
  return updateMemberController.handle(request, response)
})

router.delete('/deleteMember', (request, response) => {
  return deleteMemberController.handle(request, response)
})

export {router}