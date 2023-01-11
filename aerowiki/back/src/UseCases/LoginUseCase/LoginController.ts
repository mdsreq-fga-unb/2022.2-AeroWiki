import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
  constructor(
    private LoginUseCase: LoginUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
        const user = await this.LoginUseCase.execute({
            email,
            password,
        })
        
      return response.status(201).json({
        email: user.email,
        password: user.password
    });  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error ao createUser.'
      })
    }
  }
}