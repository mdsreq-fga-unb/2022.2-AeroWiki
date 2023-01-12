import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, surname, email, unb_id, area, role, telephone, birthdate, rg, cpf } = request.body;

    try {
      await this.createUserUseCase.execute({
        name: name + ' ' + surname,
        email,
        password: "Aerowiki@Zenit2023",
        unb_id,
        area,
        role,
        telephone,
        birthdate,
        rg,
        cpf,
        active: true,
      })
      
      return response.status(201).send();  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error ao createUser.'
      })
    }
  }
}