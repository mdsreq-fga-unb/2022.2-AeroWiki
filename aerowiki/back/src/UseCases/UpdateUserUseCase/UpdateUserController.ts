import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(
    private updateUserUseCase: UpdateUserUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {name, email, unb_id, telephone } = request.body;

    try {
      console.log("aqui")
      await this.updateUserUseCase.execute({
       name,
       email,
       unb_id,
       telephone
      })
      console.log("por ultimo")
      return response.status(201).json({message: "USUARIO ATUALIZADO"});  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error ao createUser.'
      })
    }
  }
}