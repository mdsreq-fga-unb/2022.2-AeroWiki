import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(
    private updateUserUseCase: UpdateUserUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {name, email, unb_id, telephone } = request.body;

    try {
      await this.updateUserUseCase.execute({
       name,
       email,
       unb_id,
       telephone
      })
      
      return response.status(201).send().json({message: "USUARIO ATUALIZADO"});  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error ao createUser.'
      })
    }
  }
}