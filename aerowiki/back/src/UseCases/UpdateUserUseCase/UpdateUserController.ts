import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(
    private updateUserUseCase: UpdateUserUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {name, email, unb_id, telephone, password } = request.body;
    // console.log(request)
    try {
      await this.updateUserUseCase.execute({
       name,
       email,
       unb_id,
       telephone,
       password
      })
      return response.status(201).json({message: "USUARIO ATUALIZADO"});  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'ERRO NO SISTEMA D:'
      })
    }
  }
}